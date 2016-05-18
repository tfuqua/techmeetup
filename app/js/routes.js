import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import TaylorContainer from './containers/TaylorContainer.jsx';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="taylor" component={TaylorContainer} />
  </Route>
);

export default routes;
