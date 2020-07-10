import { stringify } from 'querystring';
import { router } from 'umi';
import { getLogin, getInfo, getLogout, getUserInfo } from '@/apis/user';
import apis from '@/apis/user';

import { getPageQuery } from '@/utils/utils';
import { message } from 'antd';

const Model = {
  namespace: 'login',
  state: {
    status: true,  //登录状态
    currentUser: {},   //当前登录用户信息
    responseCode: ''
  },
  effects: {
    *GetLogin({ payload }, { call, put }) {
      const response = yield call(getLogin, payload);
      if (response.status) {
        //登录成功,将token放入cookie中，在用户信息获取接口手动带上，responseCode=1000010001登录失效
        const token = response.entry.token;
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        window.localStorage.setItem('token', token);
        //登录后重定向
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        router.replace(redirect || '/');
      } else {
        // message.error(response.message)
      }
    },

    // 用户信息
    *GetInfo(_, { call, put }) {
      // return;
      // debugger;
      const response = yield call(apis.getUserInfo);
      if (response.status) {
        yield put({
          type: 'updateState',
          payload: {
            currentUser: response.entry,
            responseCode: response.responseCode
          }
        })
        try {
          localStorage.setItem('employeeId', response.entry.employee.employeeId);
          const roles = response.entry.employee.roles;

          const menuRoles = roles.map(item => {
            return item.name;
          });

          localStorage.setItem('gaia_authority', JSON.stringify(menuRoles));
          // localStorage.getItem('gaia_authority')
        } catch (err) {}
      } else {
        message.error(response.message)
      }
    },

    *CheckLoginStatus(_, { call, put, select }) {
      const { responseCode } = yield select(state => state.login);
      const queryString = stringify({
        redirect: window.location.href,
      });
      if (responseCode === 1000010001) {
        router.replace(`/user/login?${queryString}`);
      }
    },

    *Logout(_, { call, put }) {
      const { redirect } = getPageQuery(); // Note: There may be security issues, please note
      const token = window.localStorage.getItem('token');
      const response = yield call(getLogout, {
        token
      });
      if (response.status) {
        if (window.location.pathname !== '/user/login' && !redirect) {
          window.localStorage.removeItem('token');
          router.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          });
        }
      } else {
        message.error(response.message)
      }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
  },
};
export default Model;
