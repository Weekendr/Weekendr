import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Preferences from './components/Preferences';
import UserProfile from './containers/UserProfile';
import Signup from './containers/Signup';
import Login from './containers/Login';
import TripList from './containers/TripList';
import AirbnbList from './containers/AirbnbList';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/preferences" component={Preferences} />
    <Route path="/trip-results" component={TripList} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/airbnb" component={AirbnbList} />
  </Route>
);

export default routes;
