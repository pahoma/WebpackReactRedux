'use strict';

import axios from 'axios';
import config from '../config';
import { FETCH_GENRES, ERROR } from './types';

export function fetchGenres() {
    const url = `${config.root_url}genre/movie/list?api_key=${config.api_key}&language=${config.language}`;
    const request = axios.get(url);
    console.log('Request:', request);

    return function (dispatch) {
        return request
            .then( (response) => ( dispatch({ type: FETCH_GENRES, payload: response }) ) )
            .catch( (err) => ( dispatch({ type: ERROR, payload: {err} }) ) )
    };
}
