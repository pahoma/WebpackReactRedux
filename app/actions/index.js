'use strict';

import axios from 'axios';
import config from '../config';
import { FETCH_GENRES, ERROR, FETCH_BY_CATEGORY } from './types';

export function fetchGenres() {
    const url = `${config.root_url}genre/movie/list?api_key=${config.api_key}&language=${config.language}`;
    const request = axios.get(url);
    //console.log('Request:', request);

    return function (dispatch) {
        return request
            .then( (response) => ( dispatch({ type: FETCH_GENRES, payload: response }) ) )
            .catch( (err) => ( dispatch({ type: ERROR, payload: {err} }) ) )
    };
}

export function fetchMoviesByCategory(category) {
    const url = `${config.root_url}movie/${category}?api_key=${config.api_key}&language=${config.language}`;
    const request = axios.get(url);
    const FETCH_CATEGORY = FETCH_BY_CATEGORY[category];

    //console.log('Request:', request);

    return function (dispatch) {
        return request
            .then( (response) => ( dispatch({ type: FETCH_CATEGORY, payload: response }) ) )
            .catch( (err) => ( dispatch({ type: ERROR, payload: {err} }) ) )
    };
}
