import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import {connect} from 'react-redux';
import editorApp from '../reducers/reducers.js';
import { startTimer, clockRunning, settingInterval } from '../actions/actions.js';

class countDown extends Component {
  
  render() {
    return (
      this.props.hideClock ? <div className="countdown-clock"><div className="actual-countdown-clock"></div></div> : 
        <div className="countdown-clock">
          <div className="actual-countdown-clock">
          <ReactCountdownClock seconds={3} color="#fec34a" alpha={0.9} size={300} onComplete={this.props.onStartTimer} />
          </div>
        </div>
   );
  }
}
  // <div className="countdown-clock"><ReactCountdownClock seconds={5}
  //                    color="#a9b7c0"
  //                    alpha={0.9}
  //                    size={200} /></div>

countDown.propTypes = {
  hideClock: PropTypes.bool,
  onStartTimer: PropTypes.func
};

function mapStateToProps(state) {
  return {
    hideClock: state.editorState.hideClock
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    onStartTimer: function () {
      var timeStamp = new Date();
      dispatch(startTimer(timeStamp));
      var intervals = setInterval(function () {
        dispatch(clockRunning());
      }, 10);
      dispatch(settingInterval(intervals));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(countDown);

