import React, { Component } from 'react';
import styles from './NotAuth.module.css';

class NotAuth extends Component {
  render() {
    return <div className={styles.notAuth}>抱歉,你没有权限!</div>;
  }
}

export default NotAuth;
