'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/dashboard';
import GenrePage from '../containers/genrePage';
import MoviePage from '../containers/moviePage';

import App from './../components/app';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/genres/:genreId" component={GenrePage}/>
        <Route path="/movies/:movieId" component={MoviePage}/>
    </Route>
);
