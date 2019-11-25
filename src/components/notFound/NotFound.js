import React, { Component } from 'react';
import styles from './NotFound.module.css';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.notFound}>
        <h1>404</h1>
        <h3>抱歉,没找到页面!┭┮﹏┭┮</h3>
      </div>
    );
  }
}

export default NotFound;
