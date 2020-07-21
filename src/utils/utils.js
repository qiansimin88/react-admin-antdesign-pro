import { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';
import { copy } from 'iclipboard';
import { message } from 'antd';
import moment from 'moment';
import { formatTime } from 'umi-plugin-react/locale';
import request from '@/utils/request';
import router from 'umi/router';

window.moment = moment;
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */

export const getAuthorityFromRouter = (router = [], pathname) => {
  const authority = router.find(
    ({ routes, path = '/' }) =>
      (path && pathRegexp(path).exec(pathname)) ||
      (routes && getAuthorityFromRouter(routes, pathname)),
  );
  if (authority) return authority;
  return undefined;
};
export const getRouteAuthority = (path, routeData) => {
  let authorities;
  routeData.forEach(route => {
    // match prefix
    if (pathRegexp(`${route.path}/(.*)`).test(`${path}/`)) {
      if (route.authority) {
        authorities = route.authority;
      } // exact match

      if (route.path === path) {
        authorities = route.authority || authorities;
      } // get children authority recursively

      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

export function copyText(text) {
  if (copy(text)) {
    message.success('复制成功');
  } else {
    message.warning('复制失败');
  }
}

// 千分位
export function thousandsFormat(num) {
  if (num !== undefined) {
    return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
  } else {
    return '-';
  }
}

//get参数拼接
export const getQueryStr = (url, query = {}) => {
  const queryStr = Object.keys(query)
    .reduce((ary, key) => {
      if (query[key]) {
        ary.push(encodeURIComponent(key) + '=' + encodeURIComponent(query[key]));
      }
      return ary;
    }, [])
    .join('&');
  return (url += `?${queryStr}`);
};

export function formatDate(time, format = 'YYYY-MM-DD HH:mm:ss') {
  return time ? moment(time).format(format) : '-'
}

export const href = (() => {
  // console.log(decodeURIComponent(getPageQuery().env))
  if (localStorage.env) {
    return localStorage.env
  }
  
  // return 'https://dev-api.xinc818.com/'
  const host = window.location.host;
  if (host.indexOf('daily') > -1) {
    return `https://daily-api.xinc818.com/`
  } else if (host.indexOf('dev') > -1) {
    return `https://dev-api.xinc818.com/`
  } else if (host.indexOf('mock') > -1) {
    return `https://daily-api.xinc818.com/`

    // return 'https://mock.xinc818.com/mock/50/'
  } else if (host.indexOf('pms.') > -1) {
    return 'https://api.xinc818.com/'
  }

  
  return 'https://daily-api.xinc818.com/'
  let res = '';
  switch (host) {
    case 'daily-xinxuan-system.xinc818.com':
      res = 'https://daily-api.xinc818.com/';
      break;
    case 'gray-xinxuan-system.xinc818.com':
      res = 'https://gray-api.xinc818.com/';
      break;
    case 'dev-xinxuan-system.xinc818.com':
      res = 'https://dev-api.xinc818.com/';
      break;
    case 'xinxuan-system.xinc818.com':
      res = 'https://api.xinc818.com/';
      break;
    case 'test.xinc818.com:8000':
      res = 'https://dev-api.xinc818.com/';
      // res = 'http://192.168.10.112:8080/';
      break;
    default:
      return (res = '');
  }
  // return 'https://dev-api.xinc818.com/'
  return res;
})();

// 柯力化一下
export const CurryingRequest = (p1, fp2, door=50) => {
  let p1c = p1;
  // let proxyUrl = REACT_APP_ENV === 'prd' ? '' : '/api' 
  let proxyUrl = ''
  if (fp2 === 'mock') {
    proxyUrl = `https://mock.xinc818.com/mock/${door}`
  } else {
    // proxyUrl = 'https://dev-api.xinc818.com'
  }
  // handlerUrl 处理 url
  return async (p2, handlerUrl) => {
    const { method, ...other } = p2
    let lastUrl = ''
    if (!p2.method) throw new Error('必须制定请求方法')
    if (p2.method === 'GET') {
      p2.params = other
    } else {
      p2.data = other
    }

    if(typeof handlerUrl === 'function') {
      lastUrl = handlerUrl(proxyUrl + p1c)
    }else {
      lastUrl = proxyUrl + p1c
    }

    return request.apply(null, [lastUrl, p2])
  }
}

// @par: res 响应体
export const fQ = (res) => {
  return new Promise((resolve, reject) => {
    if (res.status) {
      resolve(res)
    } else {
      message.error(response.message)
      reject(response.message)
    }
  })
}

export function renderInitialValue(value) {
  if (typeof value === 'undefined') return ''
  return value;
}
/**
 * 精确相乘
 * @param {num} arg1 
 * @param {num} arg2 
 */
export const accMul = (arg1 = 0, arg2 = 0) => {
  let m = 0
  const s1 = arg1.toString()
  const s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch (e) { }
  try { m += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}


export const FormatTime = (time, format = "YYYY-MM-DD") => {
  return time ? moment(time).format(format) : '-';
}

export const hrefGo = (path, query) => {
  router.push({
    pathname: path,
    query
})}

export const addMul = (arg1 = 0, arg2 = 0) => {
  var r1, r2, m, c;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    } else {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  } else {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return (arg1 + arg2) / m;
}

function deal(arg) {
  var t = 0;
  try {
      t = arg.toString().split(".")[1].length
  } catch(e) {}
  return t;
}

// 除法
export const accDiv = (arg1, arg2) => {
  if(!arg1) return '-'
  var t1 = deal(arg1);
  var t2 = deal(arg2);
  var r1 = Number(arg1.toString().replace(".", ""))
  var r2 = Number(arg2.toString().replace(".", ""))
  return(r1 / r2) * Math.pow(10, t2 - t1);
}