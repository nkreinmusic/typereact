import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { storeChallenges } from '../actions/actions.js';

class ChallengeList extends Component {

  componentDidMount() {
    if (this.props.challenges.length === 0) {
      $.get('/challenge/getAllChallenges', function(response) {
        this.props.storeChallengeList(response);
      }.bind(this));
    }
  }

  render() {
    var results = this.props.challenges;
    return (
      <div className="container">
        <div className="table">
          <h1 className="challengelist-header">Challenge List</h1>
          <h4 className="challengelist-miniheader">(Select one to start playing!)</h4>
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <table className="table table-bordered challengelist-table">
            <thead className="challengelist-head">
              <tr>
                <th className="challengelist-rows">Link</th>
                <th className="challengelist-rows">Difficulty</th>
                <th className="challengelist-rows">Number of Plays</th>
                <th className="challengelist-rows">Leaderboard</th>
              </tr>
            </thead>
            <tbody>
              {results.map(function(result) {
                return (<tr key={result.id}>
                  <th className="challengelist-rows"><a className="challenge-links" href={'/playchallenge/' + result.id}>{'Challenge #'+result.id}</a></th>
                  <th className="challengelist-rows">{result.difficultyLevel}</th>
                  <th className="challengelist-rows">{result.numPlays}</th>
                  <th className="challengelist-rows"><a className="challenge-links" href={'/results/' + result.id}>View Leaderboard</a></th>
                </tr>);
              })}
            </tbody>
          </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challengeState.challenges
  };
}

function mapDispatchToProps(dispatch) {
  return {
    storeChallengeList: function(challengeList) {
      dispatch(storeChallenges(challengeList));
    }
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
