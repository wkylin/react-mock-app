import { Spin } from 'antd';
import React from 'react';

import styles from './PageLoading.module.css';

const PageLoading = ({ isLoading, error }) => {
  if (isLoading) {
    return <Spin className={styles.pageLoading} size="large" spinning />;
  }
  if (error) {
    return <div className={styles.pageLoadingError}>资源加载失败！</div>;
  }
  return null;
};

export default PageLoading;
