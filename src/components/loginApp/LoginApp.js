import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class LoginApp extends Component {
  render() {
    return (
      <div>
        Login App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(LoginApp);
