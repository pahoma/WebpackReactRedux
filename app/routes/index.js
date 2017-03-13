'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/dashboard';

import App from './../components/app';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
    </Route>
);
