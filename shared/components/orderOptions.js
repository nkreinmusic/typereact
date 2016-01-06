import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';
import editorApp from '../reducers/reducers.js';
import {changingOrderOptions} from '../actions/actions.js';
import {connect} from 'react-redux';


class completedChallengesTable extends Component {
  render() {
    var that =this;
    return (
      <div id="order-options">
        <DropdownButton title={this.props.orderOptions} id="bg-justified-dropdown">
          <MenuItem eventKey="1" onSelect={function(){that.props.changeOrderOptions(this.eventKey);}}>Keystrokes</MenuItem>
          <MenuItem eventKey="2" onSelect={function(){that.props.changeOrderOptions(this.eventKey);}}>Time</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

completedChallengesTable.propTypes = {
  changeOrderOptions: PropTypes.func
};

function mapStateToProps(state) {
  return {
    orderOptions: state.profilePageState.orderOptions
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    changeOrderOptions: function (event) {
      dispatch(changingOrderOptions(event));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(completedChallengesTable);