
import wrapApi from '@/utils/wrapApi';


export default wrapApi({
  queryCreateSelects: 'purchase-center/contractQuery/dimensionConfig', 
  queryPurchaseDetail: 'purchase-center/purchaseOrderDetail/queryPurchaseOrderDetail',
  getReceiveDetail: 'purchase-center/purchaseReceiptOrder/getReceiptOrder',
  delete: 'purchase-center/purchaseReceiptOrder/cancelReceiptOrder',
  deleteReceiveOrder: 'purchase-center/purchaseReceiptOrder/cancelReceiptOrder',
  
  // queryItemList: `itemcenter/purchase/item/list`,
  // getSupplierlist: 'investment-center/purchase/supplierlist'
}, {
  queryWarehouse: 'purchase-center/warehouse/listWarehouse', // 查询仓库列表
  queryList: 'purchase-center/purchaseReceiptOrder/listReceiptOrder', // 查询收货单列表
  queryPurchaseOrderList: 'purchase-center/purchaseOrder/listPurchaseOrderSummary',
  createReceiptOrder: 'purchase-center/purchaseReceiptOrder/createReceiptOrder'
  // queryWarehouse: 'purchase-center/warehouse/listWarehouse', // 查询仓库列表
  // getUploadSignature: 'rss/public/signature/getSignature',
  // getUploadSignatureWithOutCreator: `https://${heimdallHost}heimdall.xinc818.com/rss/public/signature/getSignature`,
});
