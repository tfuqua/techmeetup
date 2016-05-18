import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { configureStore } from '../app/js/redux/store/configureStore';
import { Provider } from 'react-redux';
import { fetchComponentData } from './util/fetchData';
import routes from '../app/js/routes';
import webpack from 'webpack';
import config from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import api from './routes';

const port = 8000;
const app = new Express();

/*if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}*/

app.use('/api', api);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'dist');
app.use(Express.static('dist'));

// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const initialState = { employees: {} };
      const store = configureStore(initialState);

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(() => {
          const html = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          const finalState = store.getState();
          res.render('index', { html, finalState });
        }).catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`App is up and running over port ${port}`);
  }
});

module.exports = app;
