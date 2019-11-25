import React, { Component } from 'react';
import styles from './noData.module.css';

class NoDataTip extends Component {
  render() {
    const { tipInfo } = this.props;
    return <div className={styles.noDataTip}>{tipInfo || '暂无数据/(ㄒoㄒ)/~~'}</div>;
  }
}

export default NoDataTip;
