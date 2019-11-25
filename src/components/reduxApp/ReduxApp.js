import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class ReduxApp extends Component {
  render() {
    return (
      <div>
        Redux App
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ReduxApp);
