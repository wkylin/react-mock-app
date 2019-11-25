import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class ReactApp extends Component {
  render() {
    return (
      <div>
        React App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ReactApp);
