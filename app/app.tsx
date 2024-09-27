import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { ENV } from './configs/configs';
import { initializeMixpanel } from './analytics/tracker';

import Routes from './routes';

import allReducers from './reducers/index';
import BackgroundAnimationCanvas from './components/backgroundAnimationCanvas/BackgroundAnimationCanvas';

// import resolutions from './styles/resolutions.module.css';
import styles from './app.module.css';

const loggerMiddleware = createLogger({ predicate: () => true, logger: console, diff: true });

const store = createStore(
  allReducers,
  applyMiddleware(loggerMiddleware),
);


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <BackgroundAnimationCanvas />
      <div className={styles.container}>
        <Routes />
      </div>
    </Provider>,
  );
} else {
  console.error("Root element not found");
}

if (ENV === 'production') {
  initializeMixpanel();
}
