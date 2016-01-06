import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../shared/components/start.js';
import Editor from '../shared/components/editor.js';
import SolutionEditor from '../shared/components/solutionEditor.js';
import Counter from '../shared/components/counter.js';
import { Component, PropTypes } from 'react';
import Status from '../shared/components/status.js';
import EditorOptions from '../shared/components/editorOptions.js';
import GameProgress from '../shared/components/progressBar.js';
import { connect } from 'react-redux';
import Countdown from '../shared/components/countdown.js';
import PostData from '../shared/components/postData.js';

import $ from 'jquery';



export default class App extends Component {
  
  render() {
    return (
      <div>
        <Countdown />
        <div className="row">
          <div className="col-md-5"></div>
            <div className="col-md-2 timing">
            <Start />
            </div>
          <div className="col-md-5"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
          Make <font color="#fec34a">this code</font>...
          </div>
          <div className="col-md-5">
          ...Look like <font color="#fec34a">this code</font>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div id="editors" className="row">
        <div className="col-md-1">
        </div>
          <Editor chalID={this.props.params.challengeID}/>
          <div className="col-sm-.5">
          </div>
          <SolutionEditor/>
        </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <Counter />
          <EditorOptions />
        </div>
        <div className="col-md-5">
        <GameProgress /> 
        </div>
      </div>

      <PostData chalID={this.props.params.challengeID} />
      <div>{this.props.children}</div>
    </div>
    );
  }
}

