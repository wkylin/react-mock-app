import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './index.scss';


const {
  Header, Footer, Sider, Content
} = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    // console.log(this.props);
  }
  
  render() {
    return (
      <Layout className="layoutHide">
        <Header className="layoutHeader">Header</Header>
        <Layout className="layoutHide">
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer className="layoutFooter">Footer</Footer>
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
