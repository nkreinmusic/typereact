import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { stringChanged, incrementCounter } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';

class Status extends Component {
  
  render() {
    return (
      <div id="status" style={{textDecoration: this.props.isMatch ? 'line-through' : 'none'}}>
        Current status is: &nbsp;
        {this.props.statusText}
      </div>
    );
  }
}

Status.propTypes = {
  statusText: PropTypes.string,
  isMatch: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    statusText: state.editorState.statusText,
    isMatch: state.editorState.isMatch
  };
}

export default connect(mapStateToProps)(Status);
