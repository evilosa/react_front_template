// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { ApplyTheme } from 'rambler-ui/theme';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';

const history = createHistory();
const locationMiddleware = routerMiddleware(history);

const devToolsEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import routes from '../../routes';
import reducers from '../../reducers';

import './styles.css';

//$FlowIssue
const store = createStore(reducers, devToolsEnhancers(applyMiddleware(locationMiddleware)));

const App = () => (
  <ApplyTheme>
    <Provider store={store}>
      <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
    </Provider>
  </ApplyTheme>
);

//$FlowIssue
ReactDOM.render(<App />, document.getElementById('root'));
