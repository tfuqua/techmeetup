import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import TestContainer from './containers/TestContainer.jsx';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="test" component={TestContainer} />
  </Route>
);

export default routes;
