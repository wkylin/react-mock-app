import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class EnvApp extends Component {
  render() {
    return (
      <div>
        Env App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(EnvApp);
