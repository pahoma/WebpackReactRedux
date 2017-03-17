'use strict';

import { combineReducers } from 'redux';
import GenresReducer from './reducer_genres';

const rootReducer = combineReducers({
    genres: GenresReducer
});

export default rootReducer;
