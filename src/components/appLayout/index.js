import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';


import NoDataTip from '../noDataTip/NoDataTip';
import ReactApp from '../reactApp/ReactApp';
import RouterApp from '../routerApp/RouterApp';
import ReduxApp from '../reduxApp/ReduxApp';
import SagaApp from '../sagaApp/SagaApp';
import MockApp from '../mockApp/MockApp';
import EnvApp from '../envApp/EnvApp';


const { Header, Footer, Content } = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    // console.log(this.props);
  }
  
  render() {
    const { match: { url } } = this.props;
    
    console.log('url', url);
    return (
      
      <Layout className="layout">
        <Router>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><NavLink to={`${url}/react`}>React</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to={`${url}/router`}>Router</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to={`${url}/redux`}>Redux</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to={`${url}/saga`}>Saga</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to={`${url}/mock`}>Mock Server</NavLink></Menu.Item>
              <Menu.Item key="6"><NavLink to={`${url}/env`}>Env Set</NavLink></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Switch>
              <Redirect exact from={`${url}`} to={`${url}/react`} />
              <Route exact path={`${url}/react`} component={ReactApp} />
              <Route exact path={`${url}/router`} component={RouterApp} />
              <Route exact path={`${url}/redux`} component={ReduxApp} />
              <Route exact path={`${url}/saga`} component={SagaApp} />
              <Route exact path={`${url}/mock`} component={MockApp} />
              <Route exact path={`${url}/env`} component={EnvApp} />
              {/* <Route component={NoDataTip} /> */}
            </Switch>
          </Content>
        </Router>
        <Footer style={{ textAlign: 'center' }}>
          React Mock App @2019 wkylin
        </Footer>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps() {
  return {};
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppLayout)
);
