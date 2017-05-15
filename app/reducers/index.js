'use strict';

import { combineReducers } from 'redux';
import GenresReducer from './reducer_genres';
import CategoryReducer from './reducer_categories';
import { FETCH_BY_CATEGORY } from '../actions/types';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';

let reducers = {};
Object.keys(FETCH_BY_CATEGORY).forEach((v)=>(reducers[v] = CategoryReducer(v)));

const rootReducer = combineReducers(_.merge({
    genres: GenresReducer,
    form: formReducer
}, reducers ));

export default rootReducer;
