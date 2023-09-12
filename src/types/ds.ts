import { Affiliate_Categories_Params } from ".";
/**
 *
 * PRODUCT API
 * RECOMMENDED PRODUCTS
 *
 */

/**
 * Parameters to get the recommended products information feed
 * @param {String} feed_name
 * @param {String} category_id Category ID, you can get category ID via "get category" API https://developers.aliexpress.com/en/doc.htm?docId=45801&docType=2
 * @param {Number} page_no Page number
 * @param {String} sort sort by：priceAsc，priceDesc，volumeAsc、volumeDesc, discountAsc, discountDesc, DSRratingAsc，DSRratingDesc,
 * @param {Number} page_size record count of each page, 1 - 50
 * @param {String} target_language target language:EN,RU,PT,ES,FR,ID,IT,TH,JA,AR,VI,TR,DE,HE,KO,NL,PL,MX,CL,IN
 * @param {String} target_currency target currency:USD, GBP, CAD, EUR, UAH, MXN, TRY, RUB, BRL, AUD, INR, JPY, IDR, SEK,KRW
 * @param {String} country screens the subject product library for the target country
 */
export interface DS_ProductAPI_Recommended_Products_Params {
  country?: string;
  /**
   * @description target currency:USD, GBP, CAD, EUR, UAH, MXN, TRY, RUB, BRL, AUD, INR, JPY,
   */
  target_currency?: string;
  /**
   * @description target language:EN,RU,PT,ES,FR,ID,IT,TH,JA,AR,VI,TR,DE,HE,KO,NL,PL,MX,CL,IN
   */
  target_language?: string;
  /**
   * @description record count of each page, 1 - 50
   */
  page_size?: string;
  page_no?: string;
  sort?:
    | "priceAsc"
    | "priceDesc"
    | "volumeAsc"
    | "volumeDesc"
    | "discountAsc"
    | "discountDesc"
    | "DSRratingAsc"
    | "DSRratingDesc";
  category_id?: string;
  feed_name: string;
}

export type AE_Platform_Type = "TMALL" | "ALL" | "PLAZA";

export interface DS_ProductAPI_Recommended_Product {
  lastest_volume: number;
  seller_id: number;
  target_sale_price: string;
  evaluate_rate: string;
  target_original_price: string;
  shop_id: number;
  second_level_category_name: string;
  first_level_category_id: number;
  product_video_url: string;
  product_id: number;
  sale_price: string;
  target_sale_price_currency: string;
  second_level_category_id: number;
  shop_url: string;
  product_detail_url: string;
  product_title: string;
  first_level_category_name: string;
  product_main_image_url: string;
  platform_product_type: AE_Platform_Type;
  target_original_price_currency: string;
  ship_to_days: string;
  sale_price_currency: string;
  original_price: string;
  original_price_currency: string;
  discount: string;
}

export interface DS_ProductAPI_Recommended_Products {
  total_record_count: number;
  current_record_count: number;
  is_finished: boolean;
  total_page_no: number;
  current_page_no: number;
  products: DS_ProductAPI_Recommended_Product[];
}

export interface DS_ProductAPI_Recommended_Products_Result {
  aliexpress_ds_recommend_feed_get_response: {
    result: DS_ProductAPI_Recommended_Products;
    rsp_msg?: string;
    rsp_code: string;
  };
}

/**
 * DROPSHIPPER API
 * FEEDNAMES
 */
export interface DS_Feedname_Params extends Affiliate_Categories_Params {}

export interface DS_Feedname_Promo_Details {
  promo_name: string;
  promo_desc: string;
  product_num: number;
}

export interface DS_Feedname {
  current_record_count: number;
  promos: DS_Feedname_Promo_Details[];
}

export interface DS_Feedname_Result {
  aliexpress_ds_feedname_get_response: {
    resp_result: {
      result: DS_Feedname;
      resp_code: number;
      resp_msg: string;
    };
  };
}

/**
 * DROPSHIPPER API
 * IMAGE SEARCH
 */

export interface DS_Image_Search_Params {
  /** @description EN,RU,PT,ES,FR,ID,IT,TH,JA,AR,VI,TR,DE,HE,KO,NL,PL,MX,CL,IW,IN */
  target_language?: string;
  /** @description USD, GBP, CAD, EUR, UAH, MXN, TRY, RUB, BRL, AUD, INR, JPY, IDR, SEK,KRW */
  target_currency?: string;
  /** @description count of products， max 150. */
  product_cnt?: number;
  /** @description SALE_PRICE_ASC, SALE_PRICE_DESC, LAST_VOLUME_ASC, LAST_VOLUME_DESC */
  sort?:
    | "SALE_PRICE_ASC"
    | "SALE_PRICE_DESC"
    | "LAST_VOLUME_ASC"
    | "LAST_VOLUME_DESC";
  /** @description Ship to Country */
  shpt_to?: string;
  /** @description image name in fileserver，max size 100 KB */
  image_file_bytes: Uint8Array;
}

export interface DS_Image_Search {
  products: DS_ProductAPI_Recommended_Product[];
  total_record_count: number;
}

export interface DS_Image_Search_Result {
  aliexpress_ds_image_search_response: {
    data: DS_Image_Search;
    rsp_code: string;
    rsp_msg: string;
    total_record_count: number;
  };
}

/**
 * PRODUCT API
 * DROPSHIPPER PRODUCT DETAILS
 */
export interface DS_ProductAPI_Product_Params {
  product_id: number;
  ship_to_country?: string;
  target_currency?: string;
  target_language?: string;
}

export interface DS_ProductAPI_Product_Base_Info {
  product_id: number;
  category_id: number;
  subject: string;
  currency_code: string;
  product_status_type: string;
  ws_display: string;
  ws_offline_date: string;
  gmt_create: string;
  gmt_modified: string;
  owner_member_seq_long: number;
  evaluation_count: string;
  avg_evaluation_rating: string;
  detail: string;
  mobile_detail: string;
}

export interface DS_ProductAPI_Product_Shipping_Info {
  delivery_time: number;
  ship_to_country: string;
}

export interface DS_ProductAPI_Product_Package_Info {
  package_type: boolean;
  package_length: number;
  package_height: number;
  package_width: number;
  gross_weight: string;
  base_unit?: number;
  product_unit?: number;
}

export interface DS_ProductAPI_Product_Store_Info {
  store_id: number;
  store_name: string;
  item_as_described_rating: string;
  communication_rating: string;
  shipping_speed_rating: string;
}

export interface DS_ProductAPI_Product_Id_Converter {
  main_product_id: number;
  sub_product_id: string;
}

export interface DS_ProductAPI_Product_Multimedia_Videos {
  ali_member_id: number;
  media_id: number;
  media_status: string;
  media_type: string;
  poster_url: string;
}

export interface DS_ProductAPI_Product_Multimedia {
  ae_video_dtos: DS_ProductAPI_Product_Multimedia_Videos[];
  image_urls: string;
}

export interface DS_ProductAPI_Product {
  ae_item_base_info_dto: DS_ProductAPI_Product_Base_Info;
  ae_item_sku_info_dtos: DS_ProductAPI_Product_SKU_Variation[];
  ae_multimedia_info_dto: DS_ProductAPI_Product_Multimedia;
  package_info_dto: DS_ProductAPI_Product_Package_Info;
  logistics_info_dto: DS_ProductAPI_Product_Shipping_Info;
  ae_item_properties: DS_ProductAPI_Product_Attributes[];
  ae_store_info: DS_ProductAPI_Product_Store_Info;
  product_id_converter_result: DS_ProductAPI_Product_Id_Converter;
}

export interface DS_ProductAPI_Product_Result {
  aliexpress_ds_product_get_response: {
    result: DS_ProductAPI_Product;
    rsp_msg: string;
    rsp_code: string;
  };
}

export interface DS_ProductAPI_Product_SKU_Variation {
  sku_stock: boolean;
  sku_price: string;
  sku_code: string;
  ipm_sku_stock: number;
  id: string;
  currency_code: string;
  aeop_s_k_u_propertys: DS_ProductAPI_Product_SKU_Properties[];
  barcode: string;
  offer_sale_price: string;
  offer_bulk_sale_price: string;
  sku_bulk_order: number;
  sku_available_stock?: number;
  s_k_u_available_stock?: number;
}

export interface DS_ProductAPI_Product_SKU_Properties {
  sku_property_id: number;
  sku_property_value: string;
  sku_property_name: string;
  property_value_id: number;
  property_value_id_long: number;
  property_value_definition_name?: string;
  sku_image?: string;
}

export interface DS_ProductAPI_Product_Attributes {
  attr_name_id: number;
  attr_name: string;
  attr_value_id: number;
  attr_value: string;
  attr_value_unit?: string;
  attr_value_start?: string;
  attr_value_end?: string;
}

/**
 *
 * ORDER API
 * NEW ORDER
 *
 */

/**
 * Place order params
 * @link https://developers.aliexpress.com/en/doc.htm?docId=35446&docType=2
 *
 */
export interface DS_OrderAPI_Place_Order_Params {
  /**
   * logistics_address
   * @description Logistics address information
   * @param {String} address Address information
   * @param {String} city
   * @param {String} contact_person 	Contact
   * @param {String} country
   * @param {String} full_name Receiver's full name
   * @param {String} mobile_no telephone number
   * @param {String} phone_country Country code where the phone is located
   * @param {String} province
   * @param {String} zip 	Postal code
   *
   * product_items
   * @description Product attribute
   * @param {Number} product_count Number of Products
   * @param {Number} product_id Product id
   * @param {String} sku_attr Product sku
   * @param {String} logistics_service_name   Logistics service name
   * @param {String} order_memo   User Comments
   *
   * JSON.stringify the whole thing
   */
  param_place_order_request4_open_api_d_t_o: string;
}

export interface AE_Product_Item {
  logistics_service_name?: string;
  order_memo?: string;
  product_count: number;
  product_id: number;
  sku_attr?: string;
}

export interface AE_Logistics_Address {
  address: string;
  city?: string;
  contact_person?: string;
  country?: string;
  full_name?: string;
  mobile_no?: string;
  phone_country?: string;
  province?: string;
  zip?: string;
}

export interface DS_OrderAPI_Place_Order_Result {
  aliexpress_trade_buy_placeorder_response: {
    result: {
      error_code: string;
      error_msg: string;
      order_list: number[];
      is_success: boolean;
    };
  };
}

/**
 *
 * ORDER API
 * GET ORDER
 *
 */

export interface DS_OrderAPI_Get_Order_Params {
  order_id: number;
}

export interface DS_OrderAPI_Price {
  amount: string;
  currency_code: string;
}

export interface DS_OrderAPI_Product_Info {
  product_id: number;
  product_price: DS_OrderAPI_Price;
  product_name: string;
  product_count: number;
}

export interface DS_OrderAPI_Logistics_Info {
  logistics_no: string;
  logistics_service: string;
}

export interface DS_OrderAPI_Store_Info {
  store_id: number;
  store_name: string;
  store_url: string;
}

export interface DS_OrderAPI_Get_Order {
  gmt_create: string;
  order_status:
    | "PLACE_ORDER_SUCCESS"
    | "WAIT_BUYER_ACCEPT_GOODS"
    | "FUND_PROCESSING"
    | "FINISH";
  logistics_status:
    | "NO_LOGISTICS"
    | "WAIT_SELLER_SEND_GOODS"
    | "SELLER_SEND_GOODS"
    | "BUYER_ACCEPT_GOODS";
  order_amount: DS_OrderAPI_Price;
  child_order_list: DS_OrderAPI_Product_Info[];
  logistics_info_list: DS_OrderAPI_Logistics_Info[];
  store_info: DS_OrderAPI_Store_Info;
}

export interface DS_OrderAPI_Get_Order_Result {
  aliexpress_trade_ds_order_get_response: {
    result: DS_OrderAPI_Get_Order;
    rsp_msg: string;
    rsp_code: string;
  };
}

/**
 * DROPSHIPPER API - ORDER
 * ORDER QUERY BY INDEX
 */
export interface DS_Orders_ByIdx_Params {
  /** End time, PST time */
  end_time: string;
  /** Start time, PST time */
  start_time: string;
  /** Order status: Payment Completed(Buyer paid successfully), Buyer Confirmed Receipt(This status only change when:Buyer confirms receipt and settlement task begins which is manually executed by our operation team), Completed Settlement(Orders have been verified and commission has been paid), Invalid(Orders will not be settled including buyer refunds, order risks, antispam/penalty appeal failed, antispam/penalty appeal overdue, order not settled being over 180 days apart from the Completed Payment Time (such as in abnormal state like dispute), etc.) */
  status: string;
  /** Query index start value: if not passed, You can only check the first page */
  start_query_index_id?: string;
  page_size?: number;
  page_no?: number;
}

export interface DS_Orders_ByIdx_Order_Details {
  publisher_id: number;
  estimated_finished_commission: string;
  estimated_paid_commission: number;
  order_number: number;
  is_hot_product: "Y" | "N";
  parent_order_number: number;
  publisher_settled_currency: string;
  category_id: number;
  item_title: string;
  item_detail_url: string;
  item_main_image_url: string;
  item_count: "100";
  created_time: string;
  finished_time: string;
  item_id: number;
  paid_time: string;
  is_new_buyer: "Y" | "N";
  ship_to_country: string;
  sub_order_id: number;
  effect_status: string;
  incentive_commission_rate: string;
  estimated_incentive_paid_commission: string;
  is_affiliate_product: "Y" | "N";
  paid_amount: number;
  effect_detail_status: string;
  estimated_incentive_finished_commission: string;
  commission_rate: string;
  finished_amount: string;
  order_id: number;
}

export interface DS_Orders_ByIdx {
  current_record_count: number;
  min_query_index_id: string;
  max_query_index_id: string;
  orders: DS_Orders_ByIdx_Order_Details[];
  current_page_no: number;
}

export interface DS_Orders_ByIdx_Result {
  aliexpress_ds_commissionorder_listbyindex_response: {
    result: DS_Orders_ByIdx;
    rsp_code: number;
    rsp_msg: string;
  };
}

/**
 * DROPSHIPPING API
 * ORDER SUBMIT
 */
export interface DS_Order_Submit_Params {
  /** AE product ID */
  ae_product_id: string;
  /** Off-site payment time, GMT time, format YYYYMMDD:HHMMSS */
  paytime: string;
  /** AE order id */
  ae_orderid: string;
  /** SKU sales amount outside the station, to 2 decimal places */
  product_amount: string;
  /** Order sales amount outside the station, keep 2 decimal places */
  order_amount: string;
  /** AE product SKU information, SKU key-value pair: "200000182:193;200007763:201336100" */
  ae_sku_info: string;
  /** Commodity site url */
  product_url: string;
}

export interface DS_Order_Submit_Result {
  aliexpress_ds_member_orderdata_submit_response: {
    result: boolean;
    rsp_msg: string;
    rsp_code: number;
  };
}

/**
 * DROPSHIPPING API
 * ADD DROPSHIPPING INFO
 */
export interface DS_Add_Info_Arguments {
  /** Extended Information */
  extend_info?: Record<string, string | number | boolean>;
  /** shop address */
  store_url?: string;
  /** user signature */
  app_signature?: string;
}

export interface DS_Add_Info_Params {
  param0: string;
}

export interface DS_Add_Info_Result {
  aliexpress_ds_add_info_response: {
    result: boolean;
    result_msg: string;
    result_code: number;
  };
}

/**
 *
 * SHIPPING API
 * SHIPPING INFO
 *
 */
export interface DS_ShippingAPI_Shipping_Info_Arguments {
  sku_id?: string;
  city_code?: string;
  country_code: string;
  product_id: number;
  product_num: number;
  province_code?: string;
  send_goods_country_code: string;
  price?: string;
  price_currency?: string;
}

export interface DS_ShippingAPI_Shipping_Info_Params {
  /**
   * Get the support logistics info of a product, provide for dropshipping develeopers.
   *
   * @param {String} product_id Product ID
   * @param {String} city_code City code
   * @param {String} country_code National code
   * @param {String} product_num Number of Products
   * @param {String} province_code Province code
   * @param {String} send_goods_country_code Shipping country code
   * @param {String} price price
   * @param {String} price_currency Commodity price currency
   *
   * Apply JSON.stringify to pass params
   */
  param_aeop_freight_calculate_for_buyer_d_t_o: string;
}

export interface DS_ShippingAPI_Freight_Info {
  amount: number;
  cent: number;
  currency_code: string;
}

export interface DS_ShippingAPI_Shipping_Details {
  error_code: number;
  estimated_delivery_time: string;
  freight: DS_ShippingAPI_Freight_Info;
  service_name: string;
}

export type DS_ShippingAPI_Shipping_Info_Response =
  | {
      success: true;
      aeop_freight_calculate_result_for_buyer_d_t_o_list: DS_ShippingAPI_Shipping_Details[];
    }
  | {
      success: false;
      error_desc: string;
    };

export interface DS_ShippingAPI_Shipping_Info_Result {
  aliexpress_logistics_buyer_freight_calculate_response: {
    result: DS_ShippingAPI_Shipping_Info_Response;
  };
}

/**
 *
 * SHIPPING API
 * TRACKING INFO
 *
 */

/**
 * Dropshipper query logistics tracking information
 *
 * @param {String} logistics_no Logistics tracking number
 * @param {String} origin Order origin to be queried. The origin of the AE order is “ESCROW”.
 * @param {String} out_ref 	Order ID to be queried by the user
 * @param {String} service_name Logistics service KEY
 * @param {String} to_area Countries for receiving goods, DZ
 */
export interface DS_ShippingAPI_Tracking_Info_Params {
  logistics_no: string;
  origin: string;
  out_ref: string;
  service_name: string;
  to_area: string;
}

export interface DS_ShippingAPI_Tracking_Event {
  event_desc: string;
  signed_name: string;
  status: string;
  address: string;
  event_date: string;
}

export type DS_ShippingAPI_Tracking_Info_Response =
  | {
      result_success: true;
      details: DS_ShippingAPI_Tracking_Event[];
      official_website: string;
    }
  | {
      result_success: false;
      error_desc: string;
    };

export interface DS_ShippingAPI_Tracking_Info_Result {
  aliexpress_logistics_ds_trackinginfo_query_response: DS_ShippingAPI_Tracking_Info_Response;
}
