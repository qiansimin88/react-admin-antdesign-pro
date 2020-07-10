import wrapApi from '@/utils/wrapApi';

let heimdallHost = (() => {
  const loc = window.location.href;
  if (loc.indexOf('dev') > -1) {
    return 'dev-'
  } else if (loc.indexOf('daily') > -1) {
    return 'daily-'
  } else if (loc.indexOf('gray') > -1) {
    return 'gray-'
  } 
  return ''
})()


export default wrapApi({
  queryItemList: `itemcenter/purchase/item/list`,
  getSupplierlist: 'investment-center/purchase/supplierlist'
}, {
  queryCompanyList: 'purchase-center/company/list', // 查询公司列表
  queryWarehouse: 'purchase-center/warehouse/listWarehouse', // 查询仓库列表
  getUploadSignature: 'rss/public/signature/getSignature',
  //  getUploadSignature: `https://${heimdallHost}heimdall.xinc818.com/rss/public/signature/getSignature`,
});
