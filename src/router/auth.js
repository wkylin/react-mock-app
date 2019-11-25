import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

class AuthorizedRoute extends Component {
  render() {
    const { component: CusComponent, ...rest } = this.props;
    // const userInfo = window.localStorage.getItem('userInfo');
    // const isLogin = !!userInfo && userInfo.name;
    // const userRole = userInfo && userInfo.role === 'admin';
    const isLogin = true;
    const userRole = true;
    return (
      <Route
        {...rest}
        render={(props) => (isLogin ? (
          userRole ? (
            <CusComponent {...props} />
          ) : (
            <Redirect to="/notAuth" />
          )
        ) : (
          <Redirect to="/login" />
        ))}
      />
    );
  }
}

export default withRouter(AuthorizedRoute);
