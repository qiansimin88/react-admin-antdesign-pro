import wrapApi from '@/utils/wrapApi';

export default wrapApi({
  queryItemList: 'itemcenter/gaea/item/list',

  getCategory: 'itemcenter/gaea/cates/tree', // 获取商品类目
  getMerchantDetail: 'investment-center/gaea/auditDetailQuery',
  getExportList: 'itemcenter/gaea/item/export/list',
  getItemDetail: 'itemcenter/gaea/item/get',


}, {
  queryMerchantList: 'investment-center/gaea/auditListQuery', // 添加自定义数据 https://yapi.xinc818.com/project/15/interface/api/581
  setAudit: 'investment-center/gaea/submitAudit', // 审核
  queryDownloadList: 'cps-itemcenter/manage/item/list',
  deleteDownload: 'investment-center/gaea/auditListQuery',
  toFollowUp: 'itemcenter/gaea/item/audit/toFollowUp',
  doAudit: 'itemcenter/gaea/item/audit/doAudit',
  exportTable: 'itemcenter/gaea/item/audit/doAudit',
  deleteExport: 'itemcenter/gaea/item/export/delete'
});
