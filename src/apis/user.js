import wrapApi from '@/utils/wrapApi';

export default wrapApi(
  {
    getUserInfo: 'usercenter/operate/get',
    // getUserInfo: 'usercenter/operate/get',
    // getUser
    logout: 'usercenter/operate/logout',
  },
  {
    login: 'usercenter/operate/login',
    login: 'usercenter/operate/phone/login',
    // resetPwd: 'usercenter/employee/refreshPassword',
    resetPwd: 'usercenter/employee/refreshPasswordPersonal',
    searchEmployee: 'usercenter/employee/search',
    // refreshPasswordPersonal: 'usercenter/employee/refreshPasswordPersonal',
  },
);
