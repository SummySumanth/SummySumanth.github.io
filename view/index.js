import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index';

// import UnderConstruction from './underConstruction';
// import App from './app';
import FindSummy from './findSummy/findSummy';

import logo from './images/emoji.png';
import styles from './index.scss';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const store = createStore(
    allReducers,
    applyMiddleware(loggerMiddleware)
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<FindSummy />} />
                <Route path='*' element={<FindSummy />} />
            </Routes>
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);


console.log('Hello World !');