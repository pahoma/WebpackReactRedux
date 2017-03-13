'use strict';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';

import reducers from './../reducers';
import { getCookie } from './../utils/common';
//import { AUTH_COOKIE } from './../consts/CookieNames';

const initialState = {};

let rawAuthData = null;

if ( typeof localStorage !== 'undefined') {
    rawAuthData = localStorage.getItem('userData');
}
if ( rawAuthData && getCookie('AUTH_COOKIE') ) {
    const storedAuthData = JSON.parse(rawAuthData);
    storedAuthData.isLoggedIn = true;
    initialState.auth = Immutable.fromJS(storedAuthData);
}

export default createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
