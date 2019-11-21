import React, { Component } from 'react';
import './index.css';

class NoDataTip extends Component {
  render() {
    const { tipInfo } = this.props;
    return <div className="noDataTip">{tipInfo || '暂无数据/(ㄒoㄒ)/~~'}</div>;
  }
}

export default NoDataTip;
