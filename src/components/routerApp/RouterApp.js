import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class RouterApp extends Component {
  render() {
    return (
      <div>
        Router App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(RouterApp);
