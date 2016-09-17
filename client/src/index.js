import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import LandingApp from './component/landingApp.js';



ReactDom.render((
	<Router history={browserHistory}>
		<Route path="/" component={LandingApp}/>
	</Router>
	), document.getElementById("app"));
