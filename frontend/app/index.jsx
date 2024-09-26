import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { ENV } from './configs/configs';
import { initializeMixpanel } from './analytics/tracker';

import Routes from './routes';

import allReducers from './reducers/index';
import BackgroundAnimationCanvas from './components/backgroundAnimationCanvas/BackgroundAnimationCanvas';

import './styles/resolutions.module.css';
import styles from './index.module.css';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
  allReducers,
  applyMiddleware(loggerMiddleware),
);

const root = ReactDOM.createRoot(document.getElementById('root'));

if (ENV === 'production') {
  initializeMixpanel();
}

root.render(
  <Provider store={store}>
    <BackgroundAnimationCanvas />
    <div className={styles.container}>
      <Routes />
    </div>
  </Provider>,
);
