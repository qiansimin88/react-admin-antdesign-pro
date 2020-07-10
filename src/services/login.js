import request from '@/utils/request';
import { getQueryStr, href } from '@/utils/utils';
//登录
export async function getLogin(params) {
  return request(`usercenter/operate/login`, {
    method: 'POST',
    data: params,
  });
}

// 用户信息
export async function getInfo(params) {
  const url = getQueryStr(`usercenter/operate/get`);
  return request(url, {
    method: 'GET'
  });
}

// 登出
export async function getLogout(params) {
  const url = getQueryStr(`usercenter/operate/logout`, params);
  return request(url, {
    method: 'GET'
  });
}
