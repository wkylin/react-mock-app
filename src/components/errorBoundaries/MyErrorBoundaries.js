import React, { Component } from 'react';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log('error', error);
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
  }
  
  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    
    if (hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }
    
    return children;
  }
}

export default MyErrorBoundary;
