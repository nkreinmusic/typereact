import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import CompletedChallenges from './completedChallenges.js';
import CompletedChallengesTable from './completedChallengesTable.js';
import OrderOptions from './orderOptions.js';
import { connect } from 'react-redux';

class profilePage extends Component {
  render () {
    return (
      <div>
      <div className="col-md-2"></div>

      <div className="col-md-8 main-container">

        <div className="row first-container">
          <div className="profile-name">{this.props.username}</div>
          <div className="profile-date"><b>User since:</b> {this.props.createdDate[1]} {this.props.createdDate[2]}, {this.props.createdDate[0]}</div>
          <img className="profile-pic" src={this.props.profilePic} />
        </div>

        <div className="row challenge-order">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <CompletedChallenges />
          </div>
          <div className="col-md-4">
            <OrderOptions />
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <CompletedChallengesTable />
          </div>
          <div className="col-md-2"></div>
        </div>
        
      </div>
      <div className="col-md-2"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
    </div>
    );
  }
}


profilePage.PropTypes = {
  profilePic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    profilePic: state.loggedInState.profilePic,
    username: state.loggedInState.username,
    createdDate: state.loggedInState.createdDate
  };
}

export default connect(mapStateToProps)(profilePage);