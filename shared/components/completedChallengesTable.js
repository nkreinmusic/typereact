import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { connect } from 'react-redux';

class completedChallengesTable extends Component {
  render() {
    var challenge = this.props.dropDownDisplay.substr(11);
    return this.props.dropDownDisplay === 'Completed Challenges' ? <div></div> : 
    <div>
      <nav className="cl-effect-19">
        <a href={'/playchallenge/' + challenge}><span title="Play Challenge Again">Play Challenge Again</span></a>
      </nav>
      <table className="table table-bordered profile-table">
        <thead>
          <tr>
            <th className="table-header">Ranking</th>
            <th className="table-header keystroke-header">Keystrokes</th>
            <th className="table-header time-header">Time</th>
          </tr>
        </thead>
        <tbody>
          {this.props.keyStrokeTable.map(function(result) {
            return (
              <tr>
              <td>{result.ranking}</td>
              <td>{result.key}</td>
              <td>{result.time}</td>
              </tr>
              );
          })}
        </tbody>
      </table>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    dropDownDisplay: state.profilePageState.dropDownDisplay,
    keyStrokeTable: state.profilePageState.keyStrokeTable
  };
}

export default connect(mapStateToProps)(completedChallengesTable);

