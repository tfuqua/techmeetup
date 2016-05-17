import 'babel-polyfill';
import React from 'react';
import routes from './js/routes';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { configureStore } from './js/redux/store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const history = browserHistory;
const dest = document.getElementById('app');

render(<Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)} routes={routes} />
       </Provider>, dest);
