import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import allReducers from './reducers/index';

import App from './pages/App/app';

import styles from './index.scss';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
    allReducers,
    applyMiddleware(loggerMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);