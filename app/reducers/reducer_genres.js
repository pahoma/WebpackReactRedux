'use strict';

import { FETCH_GENRES } from '../actions/types';
import {List} from 'immutable';

export default ( state = List(), action ) => {
    //console.log('Action recieved', action);
    switch (action.type) {
        case FETCH_GENRES: {
            state = List(action.payload.data.genres);
            state.isLoaded = true;
            return state
        }
        default:
            return state;
    }
}
