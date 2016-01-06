process.env.NODE_ENV = process.env.NODE_ENV||'development';
console.log('currently within the ' + process.env.NODE_ENV + ' node environment');

var express = require('express');
var React = require('react');
var Router = require('react-router');
var path = require('path');

//requirements for webpack middleware
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./../webpack.config.js');
var compiler = webpack(webpackConfig);

//authentication requirements
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;


var bodyParser  = require('body-parser');
var app = express();

//database connection
var db = require('./database/dbconfig.js');

//build routers
var User = db.User;
var authRouter = require('./routers/authRouter.js')(express, passport, User, GitHubStrategy);
var challengeRouter = require('./routers/challengeRouter.js')(express);
var userChallengeRouter = require('./routers/userChallengeRouter.js')(express);
var userRouter = require('./routers/userRouter.js')(express);

app.use(bodyParser.json());
app.use(session({ secret: 'typereact secret' }));
app.use(passport.initialize());
app.use(passport.session());

//if the user navigates to the home page
app.get('/', function(req, res) {
  //if logged in, redirect to challenge list
  if(req.user) {
    res.redirect('/challengelist');
  } 
  //otherwise, send to landing page
  else {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  }
})

//the static middleware is not used at the moment because of the redirect immediately above
app.use(express.static(path.join(__dirname,'/../')));

//routes user to specific challenge page
app.get('/playchallenge/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to specific results page
app.get('/results/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to challenge listing
app.get('/challengeList', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to add new challenges
app.get('/addChallenge', function(req, res) {
  if(req.user && req.user.role === 1) {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  } else {
    res.redirect('/');
  }
})

//routes user to about page
app.get('/about', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to faqs page
app.get('/faqs', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to profile page
app.get('/profile', function(req, res) {
  if(req.user) {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  } else {
    res.redirect('/')
  }
})

//use webpack Middleware to build index.html script
app.use(webpackMiddleware(compiler));

//use routers
app.use('/auth', authRouter);
app.use('/challenge', challengeRouter);
app.use('/userchallenge', userChallengeRouter);
app.use('/user', userRouter);
app.use('/isLoggedIn', function(req, res) {
  if(req.user) {
    res.send(req.user);
  } else {
    res.send(false);
  }
})

app.listen(8080);
module.exports = app;
