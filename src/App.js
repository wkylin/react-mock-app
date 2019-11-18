import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import './App.css';

import {
  login,
  serve504,
  serve500,
  logout,
  corsLoginCheck,
  corsLogin
} from './service/api';

import CopyTable from './components/copyTable';

function App() {
  // useEffect(() => {
  //   logout({userName:'wkylin'})
  //     .then(res => {
  //       console.log('res==>>', res);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <header className="App-header">Hello, React</header>
        <CopyTable />
      </div>
    </ConfigProvider>
  );
}

export default App;
