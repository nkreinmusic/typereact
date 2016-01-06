
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { DefaultRoute, Link, Route, RouteHandler,IndexRoute } from 'react-router';
import thunk from 'redux-thunk';
import Router from 'react-router';  
import App from '../server/app';
import editorApp from './reducers/reducers.js';
import Navbar from './components/navbar.js';
import ChallengeList from './components/challengeList.js';
import TopFive from './components/topFive.js';
import AddChallenge from './components/addChallenge.js';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import LandingPage from './components/landingPage.js';
import About from './components/about.js';
import FAQs from './components/FAQs.js';
import profilePage from './components/profilePage.js';
const history = createBrowserHistory();




let createStoreWithMiddleware = applyMiddleware(
  thunk
  )(createStore);

let store = createStoreWithMiddleware(editorApp);
// let store = createStore(editorApp);

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Navbar}>
        <IndexRoute component={LandingPage}/>
        <Route path="playchallenge/:challengeID" component={App}/>
        <Route path="challengeList" component={ChallengeList}/>
        <Route path="results/:challengeID" component={TopFive}/>
        <Route path="addChallenge" component={AddChallenge}/>
        <Route path="faqs" component={FAQs}/>
        <Route path="about" component={About}/>
        <Route path="profile" component={profilePage}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
