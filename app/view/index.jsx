import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import AppRoutes from './routes';

import allReducers from './reducers/index';
import BackgroundAnimationCanvas from './components/backgroundAnimationCanvas/BackgroundAnimationCanvas';

import './styles/resolutions.css';
import './index.css';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
  allReducers,
  applyMiddleware(loggerMiddleware),
);

// document.body.requestFullscreen();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BackgroundAnimationCanvas />
    <div styleName="container">
      <AppRoutes />
    </div>
  </Provider>,
);
