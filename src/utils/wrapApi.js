/**
 * 分装api请求，简化操作，支持get,post,和RESTful，一般常见也就这三种
 * useage:
 *   wrapper({
 *     api1: 'item/get',
 *     api2: 'item/api2',
 *   }, {
 *     addData: 'item/add'
 *   }, {
 *     getData: 'item/{id}'
 *   })
 */
import request from './request';
import { href } from './url';

let host = window.location.host;
let isMock = host.indexOf('mock') > -1;


// 遍历接口
function loop(urls, method) {
  const re = {};
  if (!urls) return re;
  Object.keys(urls).sort().forEach(item => {
    let key = item;
    if (item.endsWith('_mock')) {
      if (!isMock) return;
      key = item.replace(/_mock$/, '');
    }
    let url = urls[item];
    url = url.replace(/^\/+/, ''); // 兼容多个斜杠开头的链接url
    let base = href
    if (url.startsWith('mock/') && isMock) {
      base = 'https://mock.xinc818.com/'
    }
    
    if (method === 'url') {
      re[key] = base + url;
    } else {
      re[key] = async (params, config) => {
        const options = {
          ...config
        };
        
        if (method === 'GET') {
          options.params = params;
        } else if (method === 'POST') {
          options.data = params;
          options.method = 'POST';
        } 
  
        return await request(base +  url, options);
      };
    }
    
    
  });
  return re;
}

/**
 * 封装请求
 * @param {Object} getUrls get 请求的url列表
 * @param {Object} postUrls post 请求的url列表
 * @param {Object} urls 直接返回url，用于upload这种场景
 */
export default function wrapper(getUrls, postUrls, urls) {
  return {
    ...loop(getUrls, 'GET'),
    ...loop(postUrls, 'POST'),
    ...loop(urls, 'url'),
  };
}