import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hideResultsModal } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.
import $ from 'jquery';
import Modal from 'react-bootstrap/lib/Modal.js';
import Button from 'react-bootstrap/lib/Button.js';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar.js';


class PostData extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps.isMatch) {
      return true;
    }
    else {
      return false;
    }
  }

  postResults(props) {
    var userID = this.props.currentUserId;
    var challengeID = Number(this.props.chalID);
    var numKeyStrokes = props.counter;
    // time conversion to seconds (input is a string)
    var totalSecInt = Number(props.min)*60 + Number(props.sec);
    var total = totalSecInt + '.' + props.ms;
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
      success: function() {},
      contentType: 'application/json'
    });
  }

  render() {
    var props = this.props;
    if (this.props.isMatch && this.props.resultsShow) {
      this.postResults(props);
    }
    
    return(
      <div className="results-container">
      <Modal {...this.props} show={this.props.resultsShow} className="resultsModal" onHide={this.props.hideResults}>
        <Modal.Header closeButton>
          <Modal.Title className="resultsHead"><strong>Congratulations!</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body className="resultsBody">
          <p><b>Keystrokes:</b> {this.props.counter}</p>
          <p><b>Time:</b> {this.props.min > 9 ? this.props.min : '0' + this.props.min}:{this.props.sec > 9 ? this.props.sec : '0' + this.props.sec}:{this.props.ms > 99 ? this.props.ms : this.props.ms > 9 ? '0' + Number(this.props.ms) : '00' + Number(this.props.ms)}</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <div>
            <Button className="resultsButton" href={'/playchallenge/' + (Number(this.props.chalID) + 1)}>Next Challenge</Button>
            <Button className="resultsButton" href={'/playchallenge/' + this.props.chalID}>Repeat Challenge</Button>
            <Button className="resultsButton" href={'/results/' + this.props.chalID}>Leaderboards</Button>
            </div>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
      </div>
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
    clockRunning: state.editorState.clockRunning
  };
}

function mapDispatchToProps(dispatch, getState, state) {
  return {
    hideResults: function() {
      dispatch(hideResultsModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostData);