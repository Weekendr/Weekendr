import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import LandingApp from './component/landingApp.js';
import routes from './routes';
import Landing from './components/Landing';
import  reducers  from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Landing />
    <Router history={browserHistory} routes={routes} />
    <Route path="/" component={LandingApp}/>
  </Provider>
  , document.querySelector('.container'));
