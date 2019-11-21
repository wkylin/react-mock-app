import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import store from '../store/index';

import '../assets/index.scss';
import App from './app';


class Root extends PureComponent {
  render() {
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider locale={zhCN}>
            <Router>
              <Switch>
                <Route component={App} />
                <Route render={() => null} />
              </Switch>
            </Router>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
