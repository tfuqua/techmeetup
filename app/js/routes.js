import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import GiphyContainer from './containers/GiphyContainer.jsx';
import TaylorContainer from './containers/TaylorContainer.jsx';
import VenkatContainer from './containers/VenkatContainer.jsx';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={GiphyContainer} />
    <Route path="taylor" component={TaylorContainer} />
  </Route>
);

export default routes;
