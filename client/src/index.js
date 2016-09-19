import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LandingApp from './components/landingApp.js';
import routes from './routes';
import  reducers  from './reducers';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={LandingApp}/>
	</Router>
  , document.getElementById("app"));