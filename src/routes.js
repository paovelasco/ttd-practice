import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Problem1 from './components/problems/Problem1';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="1" component={Problem1} />
  </Route>
);
