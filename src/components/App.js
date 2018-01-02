// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';

const history = createHistory();
const locationMiddleware = routerMiddleware(history);

const devToolsEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import routes from '../routes';
import reducers from '../reducers';

//$FlowIssue
const store = createStore(reducers, devToolsEnhancers(applyMiddleware(locationMiddleware)));

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/test">Sandwiches</Link>
          </li>
        </ul>

        {renderRoutes(routes)}
      </div>
    </ConnectedRouter>
  </Provider>
);

//$FlowIssue
ReactDOM.render(<App />, document.getElementById('root'));
