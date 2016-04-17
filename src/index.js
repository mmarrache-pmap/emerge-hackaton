import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';
import App from './app';

// Stylesheets.
import 'bootstrap/dist/css/bootstrap.css';
import './styles/sass/styles.scss';

// Redux actions.
import { fetchPropublica } from './redux/actions/propublica-actions';

// Default api calls.
store.dispatch(fetchPropublica('hope'));

injectTapEventPlugin();

// Routes template.
const template = (
  <Provider store={store}>
    <App>
      <Router history={history}>
        {Routes}
      </Router>
    </App>
  </Provider>
);

const el = document.getElementById('app');
ReactDOM.render(template, el);
