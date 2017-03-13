'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import routes from './routes';
import { Router, browserHistory, hashHistory } from 'react-router';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider history={hashHistory} store={createStoreWithMiddleware(reducers)}>
        <Router routes={routes} />
    </Provider>
    , document.querySelector('.root'));
