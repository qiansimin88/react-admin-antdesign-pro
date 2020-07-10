import React from 'react';
import { connect } from 'dva';
import { PageLoading } from '@ant-design/pro-layout';
import { Redirect } from 'umi';
import { stringify } from 'querystring';

class SecurityLayout extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    // return;
    this.setState({
      isReady: true,
    });
    const { dispatch } = this.props;
    if (this.props.login.currentUser.name) {
      return;
    }
    // console.log(this.props);
    if (dispatch) {
      dispatch({
        type: 'login/GetInfo',
      });
    }
  }

  render() {
    const { isReady } = this.state;
    const { children, loading, login: {currentUser, responseCode} } = this.props; // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

    const isLogin = currentUser.name && (responseCode !== 1000010001);
    const queryString = stringify({
      redirect: window.location.href,
    });

    // if ((!isLogin && loading) || !isReady) {
    //   return <PageLoading />;
    // }
    // return children;
    // if (!isLogin && window.location.pathname !== '/user/login') {
    //   return <Redirect to={`/user/login?${queryString}`} />;
    // }

    return children;
  }
}

export default connect(({ login, loading }) => ({
  login,
  loading: loading.models.login,
}))(SecurityLayout);
