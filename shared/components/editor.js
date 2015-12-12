import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
import SolutionEditor from './solutionEditor.js'
// require('react-codemirror/node_modules/codemirror/mode/javascript/javascript.js');
// require('react-codemirror/node_modules/codemirror/mode/xml/xml');
// require('react-codemirror/node_modules/codemirror/mode/markdown/markdown');
// require('react-codemirror/node_modules/codemirror/keymap/sublime.js');
require('codemirror/lib/codemirror.css');
require('../css/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');
var beautify = require('js-beautify').js_beautify

import $ from 'jquery';
import { Defaults } from './solutionEditor.js';

var defaults = {
    javascript: 'for(var i=0;i < array.length;',
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}

var bindings = {
  'Alt-Left': 0,
  'Alt-Right':0,
  'Ctrl-Alt-Up': 0, //maybe
  'Ctrl-Alt-Down': 0, //maybe
  'Shift-Cmd-L':0, //doesn't work on codemirror + sublime
  'Shift-Tab':0, //doesn't work on codemirror  
  'Cmd-L':0, 
  'Shift-Cmd-K':0, //doesn't work on sublime
  'Cmd-Enter':0,
  'Shift-Cmd-Enter':0,
  'Cmd-D':0,
  'Shift-Cmd-Space':0,
  'Shift-Cmd-M': 0, //doesn't work on sublime
  'Cmd-M':0, //doesn't work on sublime
  'Cmd-Ctrl-Up':0, 
  'Cmd-Ctrl-Down': 0,
  'Cmd-J':0,
  'Shift-Cmd-D': 0,
  'Cmd-T':0, //doesn't work on comdemirror + not sure what it does
  'Alt-Q':0, //doesn't work on codemirror + sublime
  'Cmd-K Cmd-Backspace':0,
  'Cmd-K Cmd-K': 0,
  'Cmd-K Cmd-U':0,
  'Cmd-K Cmd-L':0,
  'Cmd-K Cmd-Space':0, // doesn't work + not sure what it does
  'Cmd-K Cmd-A': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-W': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-X' :0, // doesn't work + not sure what it does
  'Cmd-K Cmd-Y': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-C': 0, //maybe
  'Shift-Alt-Up': 0,
  'Shift-Alt-Down': 0,
}

let Editor = React.createClass({
    getInitialState: function() {
      return {
          code: this.props.challengeUnsolved,
          solvedCode: this.props.challengeSolved,
          readOnly: false,
          mode: 'javascript',
          counter: 0
      };
    },
    componentWillReceiveProps: function(nextProps) {
      console.log('componentWillReceiveProps', this.props)
      this.setState({
        code: nextProps.challengeUnsolved,
        solvedCode: beautify(nextProps.challengeSolved, {indent_size: 2})
      })
    },
    handleKeyPress: function() {
        this.setState({counter:this.state.counter +1});
        console.log('counter is', this.state.counter);
    },
    handleKey: function(instance, name, event) {
        this.setState({counter:this.state.counter + 1})
        if(name in bindings) {
          bindings[name]++;
        }
        // console.log('bindings['+name+'] is ', bindings[name])
        console.log('handle key ', this.state.counter)
    },
    updateCode: function(newCode) {
      // debugger;
      console.log('newCode is ', newCode)
      // console.log(JSON.stringify(newCode));
      // console.log(JSON.stringify(this.state.solvedCode));
      this.setState({
        code: newCode
      });
      if(this.state.code === this.state.solvedCode) {
        alert('Good job!');
        console.log('Good job!');
      }
    },
    render: function() {
        var options = {
            lineNumbers: true,
            mode: this.state.mode,
            readOnly: this.state.readOnly,
            keyMap: 'sublime',
            tabSize: 2,
            showCursorWhenSelecting: true
        };
        return <div>
        Keystrokes:{this.state.counter}
        <Codemirror id='userEditor' ref="editor" value={this.state.code} onkeyPressHandled={this.handleKeyPress} onkeyHandled={this.handleKey} onChange={this.updateCode} options={options} />
        </div>
    }
});

var ShowCounter = exports.ShowCounter = ShowCounter;


/* ACTION CREATOR */

/*
 * action types
 */

export const KEY_PRESSED = 'KEY_PRESSED'
export const STRING_CHANGED = 'STRING_CHANGED'

/*
 * action creators
 */

export function keyPressed(ch) {
    return { type: KEY_PRESSED, ch }
}

export function stringChanged(string) {
    return { type: STRING_CHANGED, string }
}


/* REDUCER */

// import { combineReducers } from 'redux'
// import { KEY_PRESSED, STRING_CHANGED } from './actions'

function trackKeys(state = [], action) {
  switch (action.type) {
    case KEY_PRESSED:
      return [
        
      ]
    default:
      return state
  }
}

function matchCode(state = [], action) {
  switch (action.type) {
    case STRING_CHANGED:
      return [
        
      ]
    default:
      return state
  }
}
 
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}


// import { combineReducers } from 'redux'

// const editorApp = combineReducers({
//   trackKeys,
//   matchCode
// })


// export default editorApp






export default Editor;
