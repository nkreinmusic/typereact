import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTop25Times, updateTop25KeyStrokes } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
import $ from 'jquery';

export default class LandingPage extends Component {
  componentDidMount() {
    $('#navbar').addClass('hide-navbar');
  }

  render() {

    var githubButton = <a href="/auth/github"><span data-hover="Log in with Github" id="landing-button-text-gh">Log in With Github</span></a>;
    var guestButton = <a href="/challengelist"><span data-hover="Play as Guest" className="play-guest">Play as Guest</span></a>;
    return (
      <div className="container landing-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-1 col-md-3"></div>
          <div className="col-sm-10 col-md-6">
            <div className="text-center" id="landing-title"></div>
            <span><div className="landing-slogan">code with efficiency<span className="blinker">|</span></div></span>
            </div>
          <div className="col-sm-1 col-md-3"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
        </div>
        <div className="row">
          <div className="col-sm-offset-1 col-md-offset-3 cl-effect-2 landing-button-section" >
                {guestButton}
                <span className="col-md-1"></span>
                {githubButton}
          </div>
        </div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
      </div>
    );
  }
          // <a href="/challengelist"><span data-hover="&nbsp;Play as Guest&nbsp;" className="landing-button-text-guest">&nbsp;Play as Guest&nbsp;</span></a>

}