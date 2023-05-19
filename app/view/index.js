import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter, useLocation } from "react-router-dom";
import axios from 'axios';

import AppRoutes from './routes';

import allReducers from './reducers/index';

import './styles/resolutions.css';
import './index.css';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
    allReducers,
    applyMiddleware(loggerMiddleware)
);

console.log(' REACT STARTED');

// axios
//     .get('api/test')
//     .then(response => {
//         console.log('received response is ', response);
//     })

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);