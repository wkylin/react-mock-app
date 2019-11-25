import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import React, { PureComponent, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import '../assets/index.css';
import store from '../store/index';

import PageLoading from '../components/pageLoading/PageLoading';

const Login = lazy(() => import('../components/loginApp/LoginApp'));
const NotFound = lazy(() => import('../components/notFound/NotFound'));
const NotAuth = lazy(() => import('../components/notAuth/NotAuth'));
const AuthorizedRoute = lazy(() => import('./auth'));
const App = lazy(() => import('./app'));


class Root extends PureComponent {
  render() {
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider locale={zhCN}>
            <Router>
              <Suspense fallback={<PageLoading isLoading />}>
                <Switch>
                  <Redirect path="/" exact to="/app" />
                  <AuthorizedRoute exact path="/app" component={App} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/notAuth" component={NotAuth} />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </Router>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
