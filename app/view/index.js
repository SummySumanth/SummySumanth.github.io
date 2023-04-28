import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter, useLocation } from "react-router-dom";

import AppRoutes from './routes';

import allReducers from './reducers/index';

import './index.css';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
    allReducers,
    applyMiddleware(loggerMiddleware)
);

console.log(' REACT STARTED');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);