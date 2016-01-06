import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');
// var beautify = require('js-beautify').js_beautify;
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { stringChanged } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';

class SolutionEditor extends Component {

  render() {
    var options = {
      lineNumbers: true,
      mode: this.props.mode,
      readOnly: this.props.readOnly
    };
    return (
      <div className="col-md-5"><Codemirror className="solutionEditor" ref="solutionEditor" value={this.props.solvedCode} options={options} /></div>
    );
  }
}

SolutionEditor.propTypes = {
  onCodeChange: PropTypes.func,
  readOnly: PropTypes.string,
  mode: PropTypes.string,
  solvedCode: PropTypes.string
};

SolutionEditor.defaultProps = {
  readOnly: 'nocursor',
  mode: 'javascript'
};

function mapStateToProps(state) {
  return {
    solvedCode: state.editorState.solvedCode
  };
}

export default connect(mapStateToProps)(SolutionEditor);

