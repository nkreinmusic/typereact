import React from 'react';
import { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import editorApp from '../reducers/reducers.js';
// import $ from 'jquery';

export default class FAQs extends Component {

  render() {
    
    return (
      <div className="container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-container">
        <div className="row row-spacer"></div>
        <div className="row">
            <div className="col-md-4 block top-row squares left-square">
                <h4 className="faq-questions">How do I play TypeReact?</h4>
                <h6 className="faq-answers">When playing a TypeReact "Challenge", you will notice there are two pre-populated code editors. Your goal is to make the two
                code editors match. You are only allowed to edit the code editor on the left. (No copy paste allowed!)</h6>
                <div className="row row-spacer"></div>
            </div>
            <div className="col-md-4 block top-row squares">
                <h4 className="faq-questions">How do I win?</h4>
                <h6 className="faq-answers">The goal is to complete each challenge as fast as possible and using as few keystrokes as possible. The top 25 performers on each challenge will make the "Challenge" leaderboard.</h6>
                <div className="row row-spacer"></div>
            </div>
                <div className="col-md-4 block top-row right-square">
                <h4 className="faq-questions">What shortcut keys can I use?</h4>
                <h6 className="faq-answers">We currently support the standard shortcut key bindings for Sublime, Vim, and Emacs. You may choose your preferred text editor on the challenge page. Also, you can refer to the Cheatsheets link on the NavBar for a listing of shortcut key bindings for Sublime, Vim, and Emacs.</h6>
                <div className="row row-spacer"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 block bottom-row squares left-square">
                <h4 className="faq-questions">What is the difference between logging in and playing as a guest?</h4>
                <h6 className="faq-answers">If you log in, you will be able to view your historical challenge statistics and can also appear on the challenge leaderboards.</h6>
                <div className="row row-spacer"></div>
            </div>
            <div className="col-md-4 block bottom-row squares">
                <h4 className="faq-questions">How do I report a problem or make a suggestion to TypeReact?</h4>
                <h6 className="faq-answers">Please feel free to let us know if you found any bugs or would like to make any suggestions. Issues/suggestions can be reported on our GitHub page linked below.</h6>
                <h6 className="faq-answers"><a href="https://github.com/typereact/typereact/issues">Report a problem</a></h6>
                <div className="row row-spacer"></div>
            </div>
            <div className="col-md-4 block bottom-row right-square">
                <h4 className="faq-questions">How do I submit my own challenge?</h4>
                <h6 className="faq-answers">We are currently developing the feature for users to easily submit challenges. </h6>
            </div>
        </div>
        </div>
      </div>
    );
  }

}