import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class MockApp extends Component {
  render() {
    return (
      <div>
        Mock App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(MockApp);
