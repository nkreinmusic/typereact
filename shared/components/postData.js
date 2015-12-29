import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { challengeComplete } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.
import $ from 'jquery';
import Modal from 'react-bootstrap/lib/Modal.js';
import Button from 'react-bootstrap/lib/Button.js';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar.js';


class PostData extends Component {
  
  componentWillReceiveProps() {
    if (this.props.isMatch) {
      this.props.showResults();
    }
  }

  postResults(props) {
    // console.log(props);
    var userID = this.props.currentUserId;
    var challengeID = Number(this.props.chalID);
    var numKeyStrokes = props.counter;
    // time conversion to seconds (input is a string)
    var totalMin = props.min*60;
    var total = totalMin + props.sec + '.' + props.ms;
    var timeToComplete = Number(parseFloat(total).toFixed(2));

    var data = {
      userID: userID,
      challengeID: challengeID,
      numKeyStrokes: numKeyStrokes,
      timeToComplete: timeToComplete
    };

    $.ajax({
      type: 'POST',
      url: '/userchallenge/postuserchallenge',
      data: JSON.stringify(data),
      success: function() {console.log('results saved to db');},
      contentType: 'application/json'
    });
  }

  /* Need to resolve what happens when 'Next Challenge' is clicked with no more available challenges in the db */
  render() {
    var props = this.props;
    if (this.props.isMatch && !this.props.hasPosted) {
      this.postResults(props);
    }
    
    return(
      <Modal {...this.props} show={this.props.resultsShow} className="resultsModal">
        <Modal.Header>
          <Modal.Title className="resultsHead"><strong>Results</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body className="resultsBody">
          <p>Keystrokes: {this.props.counter}</p>
          <p>Time: {this.props.min > 9 ? this.props.min : '0' + this.props.min}:{this.props.sec > 9 ? this.props.sec : '0' + this.props.sec}:{this.props.ms > 99 ? this.props.ms : this.props.ms > 9 ? '0' + this.props.ms : '00' + this.props.ms}</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button href={'/playchallenge/' + (Number(this.props.chalID) + 1)}>Next Challenge</Button>
            <Button href={'/playchallenge/' + this.props.chalID}>Repeat This Challenge</Button>
            <Button href={'/results/' + this.props.chalID}>Leaderboards</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
      );
  }

}

PostData.PropTypes = {
  isMatch: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isMatch: state.editorState.isMatch,
    counter: state.editorState.counter,
    min: state.editorState.min,
    sec: state.editorState.sec,
    ms: state.editorState.ms,
    user: state.loggedInState.user,
    currentUserId: state.loggedInState.currentUserId,
    hasPosted: state.editorState.hasPosted,
    resultsShow: state.editorState.resultsShow,
    timeStopped: state.editorState.timeStopped,
    timeBegan: state.editorState.timeBegan,
    clockRunning: state.editorState.clockRunning
  };
}

function mapDispatchToProps(dispatch, getState, state) {
  return {
    showResults: function() {
      dispatch(challengeComplete());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostData);