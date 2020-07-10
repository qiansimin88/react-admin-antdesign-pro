import wrapApi from '@/utils/wrapApi';

export default wrapApi({
  getMerchantDetail: 'investment-center/gaea/auditDetailQuery',
}, {
  queryMerchantList: 'investment-center/gaea/auditListQuery', // 添加自定义数据 https://yapi.xinc818.com/project/15/interface/api/581
  setAudit: 'investment-center/gaea/submitAudit', // 审核
});

