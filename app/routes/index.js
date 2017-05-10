'use strict';

import React from 'react';
import App from './../components/app';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

const routes = {
  component: App,
  childRoutes: [
    {
        path: '/',
        getComponent(location, cb) {
        System.import('../pages/dashboard')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
    },
    {
        path: '/dashboard',
        getComponent(location, cb) {
        System.import('../pages/dashboard')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
    },
    {
        path: '/genres/:genreId',
        getComponent(location, cb) {
        System.import('../pages/genre')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
    },
    {
        path: '/movies/:movieId',
        getComponent(location, cb) {
        System.import('../pages/movie')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
    },
    {
       path: '/template',
        getComponent(location, cb) {
        System.import('../pages/template')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
    }
  ]
};

export default routes;
