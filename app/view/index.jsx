import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import Routes from './routes';

import allReducers from './reducers/index';
import BackgroundAnimationCanvas from './components/backgroundAnimationCanvas/BackgroundAnimationCanvas';

import './styles/resolutions.css';
import './index.css';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
  allReducers,
  applyMiddleware(loggerMiddleware),
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BackgroundAnimationCanvas />
    <div styleName="container">
      <Routes />
    </div>
  </Provider>,
);
