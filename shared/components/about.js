import React from 'react';
import { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import editorApp from '../reducers/reducers.js';
// import $ from 'jquery';

export default class About extends Component {

  render() {

    return (
      <div className="container">
        <h1 className="about-title">Meet The TypeReact Team</h1>
        <h5 className="about-minititle">[ TypeReact was created by four software engineers at MakerSquare Los Angeles. ]</h5>
        <div className="row row-spacer"></div>
        <div className="row">
        <div className="col-md-3 about-borders">
        <h3 className="about-names">Chelsea Cheung</h3>
        <div className="img-container"><img className="chelsea-img" src="shared/css/chelsea-about4.png"></img></div>
        <h6 className="about-bio">When Chelsea isn't coding, she's probably trying out vegan recipes, fantasizing about having her own youtube food channel, or appreciating some good design.</h6>
        <div className="row icon-container">
        <a href="https://github.com/chelseatcheung" target="_blank"><i className="fa fa-github-square fa-5x about-icon"></i></a>
        <a href="https://www.linkedin.com/in/chelsea-cheung-6442399a" target="_blank"><i className="fa fa-linkedin-square fa-5x about-icon"></i></a>
        </div>
        </div>
        <div className="col-md-3 about-borders">
        <h3 className="about-names">Nick Krein</h3>
        <div className="img-container"><img className="chelsea-img" src="shared/css/nick-about.jpeg"></img></div>
        <h6 className="about-bio">Nick is a musician turned software developer from Northern California. When taking a creative break, he enjoys hiking, video games, and grooming his beard.</h6>
        <div className="row icon-container">
        <a href="https://github.com/nkreinmusic" target="_blank"><i className="fa fa-github-square fa-5x about-icon"></i></a>
        <a href="https://www.linkedin.com/in/nickkrein" target="_blank"><i className="fa fa-linkedin-square fa-5x about-icon"></i></a>
        </div>
        </div>
        <div className="col-md-3 about-borders">
        <h3 className="about-names">Tim Lai</h3>
        <div className="img-container"><img className="chelsea-img" src="shared/css/tim-about.jpeg"></img></div>
        <h6 className="about-bio">An avid skier and golfer, Tim also is a travel, food and computer game enthusiast. Tim is a big fan of React, Redux, and unidirectional data flow.</h6>
        <div className="row icon-container">
        <a href="https://github.com/tim-lai" target="_blank"><i className="fa fa-github-square fa-5x about-icon"></i></a>
        <a href="https://www.linkedin.com/in/thetimlai" target="_blank"><i className="fa fa-linkedin-square fa-5x about-icon"></i></a>
        </div>
        </div>
        <div className="col-md-3 about-borders-marc">
        <h3 className="about-names">Marc Reicher</h3>
        <div className="img-container"><img className="chelsea-img" src="shared/css/marc-about.png"></img></div>
        <h6 className="about-bio">Marc loves math, coding, standup comedy, and sports. He is very jealous of Nick’s beard.</h6>
        <div className="row icon-container">
        <a href="https://github.com/marcreicher" target="_blank"><i className="fa fa-github-square fa-5x about-icon"></i></a>
        <a href="https://www.linkedin.com/in/marcreicher" target="_blank"><i className="fa fa-linkedin-square fa-5x about-icon"></i></a>
        </div>
        </div>
        </div>
      </div>
    );
  }
}


        // <a href="https://github.com/nkreinmusic" target="_blank"><i className="fa fa-github-square fa-4x"></i></a>
        // <a href="https://www.linkedin.com/in/nickkrein" target="_blank"><i className="fa fa-linkedin-square fa-4x"></i></a>
        // <a href="https://www.linkedin.com/in/marcreicher" target="_blank"><i className="fa fa-linkedin-square fa-4x"></i></a>
        // <a href="https://github.com/tim-lai" target="_blank"><i className="fa fa-github-square fa-4x"></i></a>
        // <a href="https://www.linkedin.com/in/thetimlai" target="_blank"><i className="fa fa-linkedin-square fa-4x"></i></a>