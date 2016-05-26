import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import GiphyContainer from './containers/GiphyContainer.jsx';
import TaylorContainer from './containers/TaylorContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="/gif" component={GiphyContainer} />
    <Route path="taylor" component={TaylorContainer} />
  </Route>
);

export default routes;
