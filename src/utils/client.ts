import { createHmac } from "crypto";

import {
  AE_API_NAMES,
  AE_Base_Client,
  AE_Response_Format,
  PublicParams,
  AliexpressMethod,
  Result,
} from "../types";

export class AEBaseClient implements AE_Base_Client {
  readonly app_key: string;
  readonly app_secret: string;
  readonly session: string;
  readonly url: string;
  readonly format: AE_Response_Format;

  readonly migrated_apis_url = "https://api-sg.aliexpress.com/sync";
  readonly new_apis_url = "https://api-sg.aliexpress.com/rest";

  protected readonly sign_method = "sha256";

  constructor(init: AE_Base_Client) {
    this.app_key = init.app_key;
    this.app_secret = init.app_secret;
    this.session = init.session;
    this.url = init.url ?? this.migrated_apis_url;
    this.format = init.format ?? "json";
  }

  protected sign(params: any): string {
    const p = JSON.parse(JSON.stringify(params));
    let basestring = "";
    if (p.method.includes("/")) {
      basestring = p.method;
      delete p.method;
    }

    basestring += Object.keys(p)
      .sort()
      .map((key) => key + p[key as keyof typeof p])
      .join("");

    return createHmac("sha256", this.app_secret, { encoding: "utf-8" })
      .update(basestring)
      .digest("hex")
      .toUpperCase();
  }

  protected async call<T extends PublicParams, K>(params: T): Result<K> {
    try {
      const p = JSON.parse(JSON.stringify(params));
      let basestring = "";
      if (p.method.includes("/")) {
        basestring = this.new_apis_url + p.method;
        delete p.method;
      } else basestring = this.migrated_apis_url;
      let sorted = Object.keys(p).sort();

      for (let i = 0; i < sorted.length; i++) {
        let symbol = i === 0 ? "?" : "&";
        if (p[sorted[i] as keyof typeof p])
          basestring +=
            symbol +
            sorted[i] +
            "=" +
            encodeURIComponent(
              p[sorted[i] as keyof typeof p] as number | string | boolean,
            );
      }
      const res = await fetch(basestring, { method: "POST" });
      const data = await res.json();
      if (data.error_response || !res.ok)
        return {
          ok: false,
          message: "Bad request.",
          request_id: data.error_response.request_id,
        };
      return { ok: true, data };
    } catch (error) {
      return {
        ok: false,
        message: "Internal error.",
      };
    }
  }

  protected async execute<K extends AE_API_NAMES>(
    method: K,
    params: AliexpressMethod<K>["params"],
  ): Result<AliexpressMethod<K>["result"]> {
    const parameters: AliexpressMethod<K>["params"] & PublicParams = {
      ...params,
      method,
      session: this.session,
      app_key: this.app_key,
      simplify: true,
      sign_method: this.sign_method,
      timestamp: Date.now(),
    };
    parameters.sign = this.sign(parameters);

    return await this.call<
      AliexpressMethod<K>["params"] & PublicParams,
      AliexpressMethod<K>["result"]
    >(parameters);
  }

  async callAPIDirectly(
    method: string,
    params: Record<string, string | number | boolean>,
  ): Result<any> {
    const parameters: any = {
      ...params,
      method: method as any,
      session: this.session,
      app_key: this.app_key,
      simplify: true,
      sign_method: this.sign_method,
      timestamp: Date.now(),
    };
    parameters.sign = this.sign(parameters);

    return await this.call<any, unknown>(parameters);
  }
}
