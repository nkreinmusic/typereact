import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Component, PropTypes } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';
import editorApp from '../reducers/reducers.js';
import { addCompletedChallenges, selectMenuItem } from '../actions/actions.js';
import $ from 'jquery';


class completedChallenges extends Component {
  componentWillReceiveProps(nextProps) {
    if(this.props.currentUserId === 1 && nextProps.currentUserId !== 1) {
      this.fetchChallengeHistory.call(this, nextProps.currentUserId);
    }
  }
  
  fetchChallengeHistory(user) {
    if(this.props.allChallenges.length === 0) {
      $.get('/userChallenge/profileStats', user.toString(), function(results) {
        var allChallenges =[];
        for(var i=0; i < results.length; i++) {
          if(allChallenges.indexOf(results[i].challengeID) === -1 ) {
            allChallenges.push(results[i].challengeID);         
          }
        }
        allChallenges.sort(function(a,b) {
          return a-b;
        });
        this.props.addAllChallenges(allChallenges, results);
      }.bind(this));
    }
  }

  render() {
    var completedChallenges = this.props.allChallenges;
    var that = this;
    return (
      <div id="completed-challenges">
        <DropdownButton title={this.props.dropDownDisplay} id="bg-justified-dropdown">
          {completedChallenges.map(function(result, i){
            return (<MenuItem className="menu-item" eventKey={i+1} onSelect={function(){that.props.onSelectMenuItem(result);}}>Challenge #{result}</MenuItem>
            );
          })}
        </DropdownButton>
      </div>
    );
  }
}

completedChallenges.propTypes = {
  currentUserId: PropTypes.number,
  addAllChallenges: PropTypes.func,
  onSelectMenuItem: PropTypes.func
};

function mapStateToProps(state) {
  return {
    currentUserId: state.loggedInState.currentUserId,
    allChallenges: state.profilePageState.allChallenges,
    dropDownDisplay: state.profilePageState.dropDownDisplay
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    addAllChallenges: function (challenges, results) {
      dispatch(addCompletedChallenges(challenges, results));
    },
    onSelectMenuItem: function (challenge) {
      dispatch(selectMenuItem(challenge));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(completedChallenges);