import {
  AE_Base_Client,
  AE_Logistics_Address,
  AE_Product_Item,
  DS_ProductAPI_Recommended_Products_Params,
  DS_ProductAPI_Product_Params,
  DS_ShippingAPI_Shipping_Info_Arguments,
  DS_ShippingAPI_Tracking_Info_Params,
  DS_OrderAPI_Get_Order_Params,
  DS_Image_Search_Params,
  DS_Feedname_Params,
  Affiliate_Categories_Params,
  DS_Orders_ByIdx_Params,
  DS_Order_Submit_Params,
  DS_Add_Info_Arguments,
} from "../types";
import { AESystemClient } from "./system_client";

export class DropshipperClient extends AESystemClient {
  constructor(init: AE_Base_Client) {
    super(init);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.logistics.buyer.freight.calculate&methodType=GET/POST
   */
  async shippingInfo(args: DS_ShippingAPI_Shipping_Info_Arguments) {
    return await this.execute("aliexpress.logistics.buyer.freight.calculate", {
      param_aeop_freight_calculate_for_buyer_d_t_o: JSON.stringify(args),
    });
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.logistics.ds.trackinginfo.query&methodType=GET/POST
   */
  async trackingInfo(args: DS_ShippingAPI_Tracking_Info_Params) {
    return await this.execute(
      "aliexpress.logistics.ds.trackinginfo.query",
      args,
    );
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.add.info&methodType=GET/POST
   */
  async addDropshippingInfo(args: DS_Add_Info_Arguments) {
    return await this.execute("aliexpress.ds.add.info", {
      param0: JSON.stringify(args),
    });
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.image.search&methodType=GET/POST
   */
  async searchByImage(args: DS_Image_Search_Params) {
    return await this.execute("aliexpress.ds.image.search", args);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.recommend.feed.get&methodType=GET/POST
   */
  async queryfeaturedPromoProducts(
    args: DS_ProductAPI_Recommended_Products_Params,
  ) {
    return await this.execute("aliexpress.ds.recommend.feed.get", args);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.trade.buy.placeorder&methodType=GET/POST
   */
  async createOrder({
    logistics_address,
    product_items,
  }: {
    logistics_address: AE_Logistics_Address;
    product_items: AE_Product_Item[];
  }) {
    return await this.execute("aliexpress.trade.buy.placeorder", {
      param_place_order_request4_open_api_d_t_o: JSON.stringify({
        logistics_address,
        product_items,
      }),
    });
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.trade.ds.order.get&methodType=GET/POST
   */
  async orderDetails(args: DS_OrderAPI_Get_Order_Params) {
    return await this.execute("aliexpress.ds.trade.order.get", args);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.feedname.get&methodType=GET/POST
   */
  async queryFeaturedPromos(args: DS_Feedname_Params) {
    return await this.execute("aliexpress.ds.feedname.get", args);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.category.get&methodType=GET/POST
   */
  async getCategories(args: Affiliate_Categories_Params) {
    return await this.execute("aliexpress.ds.category.get", args);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.commissionorder.listbyindex&methodType=GET/POST
   */
  async ordersListByIndex(args: DS_Orders_ByIdx_Params) {
    return await this.execute(
      "aliexpress.ds.commissionorder.listbyindex",
      args,
    );
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.member.orderdata.submit&methodType=GET/POST
   */
  async submitOrderData(args: DS_Order_Submit_Params) {
    return await this.execute("aliexpress.ds.member.orderdata.submit", args);
  }

  /**
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.recommend.feed.get&methodType=GET/POST
   */
  async productDetails(args: DS_ProductAPI_Product_Params) {
    return await this.execute("aliexpress.ds.product.get", args);
  }
}
