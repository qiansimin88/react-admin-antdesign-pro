import { Alert, Checkbox, Icon, Modal, message } from 'antd';
import React, { Component } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import apis from '@/apis/user';
import LoginComponents from './components/Login';
import styles from './style.less';
import { getPageQuery } from '@/utils/utils';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginComponents;

class Login extends Component {
  loginForm = undefined;

  state = {
    autoLogin: true,
  }; // 自动保存

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }; // 提交登录

  handleSubmit = async (err, values) => {
    if (!err) {
      const { dispatch } = this.props;
      if (this.state.autoLogin) {
        window.localStorage.setItem('phone', values.phone);
        window.localStorage.setItem('password', values.password);
      } else {
        window.localStorage.removeItem('phone');
        window.localStorage.removeItem('password');
      }
      const res = await apis.login(values);
      if (!res.status) {
        return message.error(res.message || '登录接口调用异常');
      }
      

      // dispatch({
      //   type: 'merchantTable/updateState',
      //   payload: {
      //     auditStatus: _auditStatus,
      //     onSaleFlag: _onSaleFlag,
      //     tabKey: key,
      //     pageNum: 1
      //   }
      // });
      localStorage.setItem('purchase_token', res.entry.token);
      await this.props.dispatch({
        type: 'login/GetInfo'
      });

      const { redirect } = getPageQuery();
      if (!redirect) {
        window.location.href = '#/';
      }else {
        window.location.replace(redirect)
      }
      // const urlParams = new URL(window.location.href);
      // if (!redirect) {
      //   window.location.href = '#/';
      //   return;
      // }
      // const redirectUrlParams = new URL(redirect);
      // if (redirectUrlParams.origin === urlParams.origin) {
      //   redirect = redirect.substr(urlParams.origin.length);
      //   if (redirect.match(/^\/.*#/)) {
      //     redirect = redirect.substr(redirect.indexOf('#') + 1);
      //   }
      // } else {
      //   window.location.href = '#/';
      //   return;
      // }
      // dispatch({
      //   type: 'login/GetLogin',
      //   payload: { ...values },
      // });
    }
  }; // 登录失败警告

  renderMessage = content => (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  ); //忘记密码

  forgotPassword = e => {
    e.preventDefault();
    Modal.info({
      title: '忘记密码',
      okText: '确认',
      content: (
        <div>
          <p>请联系系统管理员 jiangruidong@xinc818.group</p>
          <p>查询或者修改账户密码</p>
        </div>
      ),

      onOk() {},
    });
  };

  render() {
    const {
      userLogin: { status },
      submitting,
    } = this.props;
    const { autoLogin } = this.state;
    const name = window.localStorage.getItem('phone');
    const password = window.localStorage.getItem('password');
    return (
      <div className={styles.main}>
        <LoginComponents
          onSubmit={this.handleSubmit}
          onCreate={form => {
            this.loginForm = form;
          }}
        >
          {!status && !submitting && this.renderMessage('账户或密码错误')}
          <UserName
            name="phone"
            placeholder="用户名"
            defaultValue={name}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="密码"
            defaultValue={password}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
            onPressEnter={e => {
              e.preventDefault();
              if (this.loginForm) {
                this.loginForm.validateFields(this.handleSubmit);
              }
            }}
          />

          {/* <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              自动保存
            </Checkbox>
            <a
              style={{
                float: 'right',
              }}
              onClick={this.forgotPassword}
            >忘记密码</a>
          </div> */}
          <Submit loading={submitting}>登 录</Submit>
        </LoginComponents>
      </div>
    );
  }
}

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/GetLogin'],
}))(Login);
