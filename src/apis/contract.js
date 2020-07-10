import wrapApi from '@/utils/wrapApi';

export default wrapApi({
  queryPurchaseContractList: 'purchase-center/contractQuery/purchase/contractList',
  queryProxyContractList: 'purchase-center/contractQuery/agent/contractList',


  getOperatelog1: `purchase-center/purchaseContract/purchase/getOperatelog`,

  getOperatelog2: `purchase-center/purchaseContract/agent/getOperatelog`,


  // purchase-center/purchaseContract/getContractByParams

  getDetail1: `purchase-center/purchaseContract/purchase/getContractByParams`,
  getDetail2: `purchase-center/purchaseContract/agent/getContractByParams`,

  queryContractList: 'purchase-center/contractQuery/contractList',
  contractSummaryList: 'purchase-center/contractQuery/contractSummaryList', // 合同概要信息列表
  queryCompanyList: 'purchase-center/company/list',
  queryCompanyList: 'investment-center/company/list',
  queryListWarehouse: 'purchase-center/warehouse/listWarehouse', // 查询仓库列表
  queryCreateSelects: 'purchase-center/contractQuery/dimensionConfig', // 查询各种下拉列表

  delete: 'purchase-center/purchaseContract/agent/delete',
  delete1: 'purchase-center/purchaseContract/purchase/delete',
  delete2: 'purchase-center/purchaseContract/agent/delete',

  


  
  

}, {

  queryWarehouse: 'purchase-center/warehouse/listWarehouse', // 查询仓库列表
  
  queryTimeTableList: 'wms/public/platform/timeTableList', // 月台列表

  saveOrSubmit: 'purchase-center/purchaseContract/saveOrSubmit',
  queryMerchantList: 'investment-center/gaea/auditListQuery', // 添加自定义数据 https://yapi.xinc818.com/project/15/interface/api/581
  setAudit: 'investment-center/gaea/submitAudit', // 审核
  queryDownloadList: 'cps-itemcenter/manage/item/list',
  deleteDownload: 'investment-center/gaea/auditListQuery',
  toFollowUp: 'itemcenter/gaea/item/audit/toFollowUp',
  doAudit: 'itemcenter/gaea/item/audit/doAudit',
  exportTable: 'itemcenter/gaea/item/audit/doAudit',
  deleteExport: 'itemcenter/gaea/item/export/delete',

  


  saveOrSubmit1: 'purchase-center/purchaseContract/purchase/saveOrSubmit', // 采购合同保存
  saveOrSubmit2: 'purchase-center/purchaseContract/agent/saveOrSubmit', // 销售合同保存


  preview1: 'purchase-center/purchaseContract/purchase/doPreview',
  preview2: 'purchase-center/purchaseContract/agent/doPreview',

  stopContract1: 'purchase-center/purchaseContract/purchase/stop',
  stopContract2: 'purchase-center/purchaseContract/agent/stop',

  saveContractFile1: `purchase-center/purchaseContract/purchase/files/save`,
  saveContractFile2: `purchase-center/purchaseContract/agent/files/save`,

  
});


/*
采购合同预览 /purchaseContract/purchase/doPreview
销售合同预览/purchaseContract/agent/doPreview

采购合同附件保存 /purchaseContract/purchase/files/save
销售合同附件保存/purchaseContract/agent/files/save

*/