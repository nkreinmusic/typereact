import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTop25Times, updateTop25KeyStrokes } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import $ from 'jquery';
import Modal from 'react-bootstrap/lib/Modal.js';

class TopFive extends Component {

  componentDidMount() {
    var top25Times = [];
    var top25KeyStrokes = [];
    var that = this;
    $.get('/userchallenge/toptwentyfivetimes', this.props.params.challengeID, function(top25fromDB) {
      top25Times = top25fromDB;
    }.bind(this)).then(function() {
      var counter = 0;
      top25Times.forEach(function(score, rankIndex) {
        $.get('/user/find', score.userID.toString(), function(userInfo) {
          score.name = userInfo.username;
          score.pic = userInfo.githubProfile;
          counter++;
          if(counter === top25Times.length) {
            that.props.updateTop25Times(top25Times);
          }
        });
      });
    });
    $.get('/userchallenge/toptwentyfivekeystrokes', this.props.params.challengeID, function(top25KeyStrokesFromDB) {
      top25KeyStrokes = top25KeyStrokesFromDB;
    }.bind(this)).then(function() {
      var counter = 0;
      top25KeyStrokes.forEach(function(score, rankIndex) {
        $.get('/user/find', score.userID.toString(), function(userInfo) {
          score.name = userInfo.username;
          score.pic = userInfo.githubProfile;
          counter++;
          if(counter === top25KeyStrokes.length) {
            that.props.updateTop25KeyStrokes(top25KeyStrokes);
          }
        });
      });
    });

  }

  render() {
    var globalTop25Times = this.props.globalTop25Times || [];
    var globalTop25KeyStrokes = this.props.globalTop25KeyStrokes || [];
    if(globalTop25Times.length === 0 || globalTop25KeyStrokes.length === 0) {
      return (
        <Modal className="resultsModal" show animation={false}>
          <Modal.Header>
            <Modal.Title className="resultsHead"><strong>Loading Leaderboard</strong></Modal.Title>
          </Modal.Header>
        </Modal>
      );
    }

    return (
      <div className="container">
        <h1 className="leaderboard-header">Challenge #{this.props.params.challengeID} Scores</h1>
        <div className="col-xs-6">
          <div className="table">
            <h4 className="top-25">Top 25 Fastest Times</h4>
            <table className="table table-bordered">
              <thead className="leaderboard-rowheader">
                <tr>
                  <th className="leaderboard-rows" id="col-md-1">Rank</th>
                  <th className="leaderboard-rows" id="col-md-1">User</th>
                  <th className="leaderboard-rows" id="col-md-1">KeyStrokes</th>
                  <th className="leaderboard-rows" id="col-md-1">Time</th>
                </tr>
              </thead>
              <tbody>
                {globalTop25Times.map(function(topFiveItem, index) {
                  return <tr key={topFiveItem.id}>
                  <th className="leaderboard-rows">{index + 1}</th>
                  <th>{topFiveItem.name}</th>
                  <th className="leaderboard-rows">{topFiveItem.numKeyStrokes}</th>
                  <th className="leaderboard-rows">{topFiveItem.timeToComplete}</th>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="table">
            <h4 className="top-25">Top 25 Fewest Keystrokes</h4>
            <table className="table table-bordered">
              <thead className="leaderboard-rowheader">
                <tr>
                  <th className="leaderboard-rows" id="col-md-1">Rank</th>
                  <th className="leaderboard-rows" id="col-md-1">User</th>
                  <th className="leaderboard-rows" id="col-md-1">KeyStrokes</th>
                  <th className="leaderboard-rows" id="col-md-1">Time</th>
                </tr>
              </thead>
              <tbody>
                {globalTop25KeyStrokes.map(function(topFiveItem, index) {
                  return <tr key={topFiveItem.id}>
                  <th className="leaderboard-rows">{index + 1}</th>
                  <th>{topFiveItem.name}</th>
                  <th className="leaderboard-rows">{topFiveItem.numKeyStrokes}</th>
                  <th className="leaderboard-rows">{topFiveItem.timeToComplete}</th>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

TopFive.propTypes = {
  // top25Times: PropTypes.array,
  // topFiveKeyStrokes: PropTypes.array,
  // updatetop25Times: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    globalTop25Times: state.challengeState.globalTop25Times,
    globalTop25KeyStrokes: state.challengeState.globalTop25KeyStrokes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTop25Times: function(arr) {
      dispatch(updateTop25Times(arr));
    },
    updateTop25KeyStrokes: function(arr) {
      dispatch(updateTop25KeyStrokes(arr));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopFive);
