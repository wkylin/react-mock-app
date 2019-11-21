import { Spin } from 'antd';
import React from 'react';

import './index.css';

const PageLoading = ({ isLoading, error }) => {
  if (isLoading) {
    return <Spin className="pageLoading" size="large" spinning />;
  }
  if (error) {
    return <div className="pageLoadingError">资源加载失败！</div>;
  }
  return null;
};

export default PageLoading;
