import wrapApi from '@/utils/wrapApi';

export default wrapApi({
  getAddCustomerField: 'settlement/back/addCustomerField', // 添加自定义数据
  getAnchorSettleDetailByDate: 'settlement/back/anchorSettleDetailByDate', // 根据主播id和结算月份查询结算单
  getAnchorSettleDetailById: 'settlement/back/anchorSettleDetailById', // 根据结算单id查询结算单
  getCustomerFieldItems: 'settlement/back/getCustomerFieldItems', // 查询自定义项列表
  updateMoney: 'settlement/back/updateMoney', // 订正金额
  deleteCustomerField: 'settlement/back/deleteCustomerField', // 删除一个自定义项
  getConfirmPay: 'settlement/back/confirmPay', // 确认打款
  getAnchorSettleOrderList: 'settlement/back/anchorSettleOrderList', // 查询结算单下的订单明细
}, {
  getAnchorSettleList: 'settlement/back/anchorSettleList', // 月度主播列表
},);

/*
import request from '@/utils/request';
import { getQueryStr, href } from '@/utils/utils';
// 添加自定义数据
export async function getAddCustomerField(params) {
  const url = getQueryStr(`${href}/settlement/back/addCustomerField`, params);
  return request(url, {
    method: 'GET'
  });
}

// 根据主播id和结算月份查询结算单
export async function getAnchorSettleDetailByDate(params) {
  const url = getQueryStr(`${href}/settlement/back/anchorSettleDetailByDate`, params);
  return request(url, {
    method: 'GET'
  });
}

// 根据结算单id查询结算单
export async function getAnchorSettleDetailById(params) {
  const url = getQueryStr(`${href}/settlement/back/anchorSettleDetailById`, params);
  return request(url, {
    method: 'GET'
  });
}

// 月度主播列表
export async function getAnchorSettleList(params) {
  return request(`${href}/settlement/back/anchorSettleList`, {
    method: 'POST',
    data: params
  });
}

// 查询结算单下的订单明细
export async function getAnchorSettleOrderList(params) {
  const url = getQueryStr(`${href}/settlement/back/anchorSettleOrderList`, params);
  return request(url, {
    method: 'GET'
  });
}

// 确认打款
export async function getConfirmPay(params) {
  const url = getQueryStr(`${href}/settlement/back/confirmPay`, params);
  return request(url, {
    method: 'GET'
  });
}

// 删除一个自定义项
export async function deleteCustomerField(params) {
  const url = getQueryStr(`${href}/settlement/back/deleteCustomerField`, params);
  return request(url, {
    method: 'GET'
  });
}

// 订正金额
export async function updateMoney(params) {
  const url = getQueryStr(`${href}/settlement/back/updateMoney`, params);
  return request(url, {
    method: 'GET'
  });
}

// 查询自定义项列表
export async function getCustomerFieldItems(params) {
  const url = getQueryStr(`${href}/settlement/back/getCustomerFieldItems`, params);
  return request(url, {
    method: 'GET'
  });
}
*/
