import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class SagaApp extends Component {
  render() {
    return (
      <div>
        Saga App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(SagaApp);
