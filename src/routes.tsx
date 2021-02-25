import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import Profiles from './views/profiles/Profiles';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/profiles" component={Profiles} />
  </Switch>
);

export default Routes;
