import React from 'react';
import ReactDOM from 'react-dom';
import editorApp from '../reducers/reducers.js';
import { connect } from 'react-redux';
import { countDown, countDownBySecond, startTimer, stopTimer, clockRunning, settingInterval, clockStop, showClock } from '../actions/actions.js';
import { Component, PropTypes } from 'react';
import thunk from 'redux-thunk';

import $ from 'jquery';

class Start extends Component {
  
  render () {
    return(
      <div>
        <button className="button start-timer" onClick={this.props.onShowClock}>Begin Challenge</button>
        <br></br>
        <div id="timer"><h2>{this.props.min > 9 ? this.props.min : '0' + this.props.min}:{this.props.sec > 9 ? this.props.sec : '0' + this.props.sec}:{this.props.ms > 99 ? this.props.ms : this.props.ms > 9 ? '0' + Number(this.props.ms) : '00' + Number(this.props.ms)}</h2></div>
      </div>
    );
  }
}

Start.propTypes = {
  onCountDown: PropTypes.func,
  onCountDownBySecond: PropTypes.func,
  onShowClock: PropTypes.func,
  // onStartTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
  countdown: PropTypes.number,
  min: PropTypes.string,
  sec: PropTypes.string,
  ms: PropTypes.string,
  code: PropTypes.string,
  isMatch: PropTypes.bool,
  clockRunning: PropTypes.bool,
  hideClock: PropTypes.bool
  // timeStopped: PropTypes.date,
};

// Timer.propTypes = {
// }

function mapStateToProps(state) {
  return {
    timeStopped: state.editorState.timeStopped,
    timeBegan: state.editorState.timeBegan,
    stoppedDuration: state.editorState.stoppedDuration,
    started: state.editorState.started,
    min: state.editorState.min,
    sec: state.editorState.sec,
    ms: state.editorState.ms,
    countdown: state.editorState.countdown,
    clockRunning: state.editorState.clockRunning,
    code: state.editorState.code,
    isMatch: state.editorState.isMatch,
    hideClock: state.editorState.hideClock
  };
}
function mapDispatchToProps(dispatch, state) {
  return {
    // onClockRunning: function () {
    //   console.log('setting interval onclockrunning')
    //   var currentTime = new Date()
    //   var timeElapsed = new Date(currentTime-state.timeBegan-state.stoppedDuration) 
    //   dispatch(clockRunning(timeElapsed))
    // },
    onShowClock: function () {
      dispatch(showClock());
    },
    // onStartTimer: function () {
    //   var timeStamp = new Date();
    //   dispatch(startTimer(timeStamp));
    //   var intervals = setInterval(function () {
    //     dispatch(clockRunning());
    //   }, 10);
    //   dispatch(settingInterval(intervals));
    // },
    onStopTimer: function () {
    // let currentState = getState();
    // console.log('currentState is ', currentState)
      var timeStamp = new Date();
      dispatch(stopTimer(timeStamp));
      // dispatch(clockStop);
    },
    onCountDown: function () {
      dispatch(countDown());
    },
    onCountDownBySecond: function () {
      dispatch(countDownBySecond());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Start);

