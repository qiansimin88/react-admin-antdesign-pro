import wrapApi from '@/utils/wrapApi';


export default wrapApi({
  stopEnquiry: `purchase-center/inquirySheet/closeInquirySheet`,
  stopEnquiry_mock: `mock/50/purchase-center/inquirySheet/closeInquirySheet`,
  getBaseConfig: 'purchase-center/contractQuery/dimensionConfig', // 查询各种下拉列表
  getOfferDetail: '/purchase-center/inquirySheet/detailInquirySheet',
  getOfferDetail_mock: 'mock/50/purchase-center/holmes/suppilerOffer/detailSupplierOffer',
  getEnquiryItemList: `/itemcenter/purchase/item/getEnquiryItemList`, // 询价商品列表
  // getEnquiryItemList_mock: 'itemcenter/purchase/item/list',
  getCates: `itemcenter/holmes/cates/laser/tree`, // 获取类目

  getSuppliers: 'investment-center/purchase/supplierlistByPage',
  getSuppliers_mock: 'investment-center/purchase/supplierlistByPage',
  
  closeInquirySheet: 'purchase-center/inquirySheet/closeInquirySheet',
  
  
  // https://yapi.xinc818.com//{id}
}, {
  
  createOrder: '/purchase-center/inquirySheet/createInquirySheet',
  queryEnquiryList: 'purchase-center/inquirySheet/listInquirySheet',
  // queryEnquiryList_mock: '/////mock/50/purchase-center/inquirySheet/listInquirySheet',

  queryListSupplierOffer: 'purchase-center/suppilerOffer/listSupplierOffer', // 查看报价单
  queryListSupplierOffer_mock: '/mock/50/purchase-center/suppilerOffer/listSupplierOffer', // 查看报价单

  applySupplierInfo: `/purchase-center/suppilerOffer/applySupplierInfo`, // 申请查看供应商联系方式
  applySupplierInfo_mock: `mock/50/purchase-center/suppilerOffer/applySupplierInfo`,
});
