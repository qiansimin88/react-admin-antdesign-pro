import React, { useEffect } from 'react';
import { Result } from 'antd';
import check from './CheckPermissions';
import { connect } from 'dva';


const Authorized = ({
  children,
  authority,
  noMatch = (
    <Result
      status={403}
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  ),
}) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  const dom = check(authority, childrenRender, noMatch);
  useEffect(() => {
  })
  return <>{dom}</>;
};

export default Authorized;
// connect(({ merchantTable, loading }) => ({
//   merchantTable,
//   loadingAll: loading.models.merchantTable
// }))(Authorized);
