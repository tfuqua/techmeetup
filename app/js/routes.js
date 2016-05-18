import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * from './containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="taylor" component={TaylorContainer} />
  </Route>
);

export default routes;
