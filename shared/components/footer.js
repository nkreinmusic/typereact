import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar.js';

export default class Footer extends Component {
  
  render() {
    return (
      <footer className="footer">
    <div className="row">
      <div className="col-md-12">
          <div className="footer-container">
          <span className="footer-elements">© TypeReact 2015&nbsp; 
            <a href="https://github.com/typereact/typereact" target="_blank"><i className="fa fa-github"></i></a>
          </span>
          <span className="footer-elements">Chelsea Cheung&nbsp;
            <a href="https://github.com/chelseatcheung" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
            <a href="https://www.linkedin.com/in/chelsea-cheung-6442399a" target="_blank"><i className="fa fa-linkedin"></i></a>
          </span>
          <span className="footer-elements">Nick Krein&nbsp;
            <a href="https://github.com/nkreinmusic" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
            <a href="https://www.linkedin.com/in/nickkrein" target="_blank"><i className="fa fa-linkedin"></i></a>
          </span>
          <span className="footer-elements">Tim Lai&nbsp;
            <a href="https://github.com/tim-lai" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
            <a href="https://www.linkedin.com/in/thetimlai" target="_blank"><i className="fa fa-linkedin"></i></a>
          </span>
          <span className="footer-elements">Marc Reicher&nbsp;
            <a href="https://github.com/marcreicher" target="_blank"><i className="fa fa-github"></i></a>&nbsp;
            <a href="https://www.linkedin.com/in/marcreicher" target="_blank"><i className="fa fa-linkedin"></i></a></span>
          </div>
      </div>
    </div>
    </footer>
    );
  }
}
        // <Navbar id="footer">