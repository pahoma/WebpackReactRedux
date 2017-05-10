'use strict';

import { FETCH_BY_CATEGORY } from '../actions/types';
import {List} from 'immutable';

export default (categoryName) => ((state = List(), action)=> {
    let FETCH_CATEGORY = FETCH_BY_CATEGORY[categoryName];
    //console.log('Action recieved', action);
    switch (action.type) {
        case FETCH_CATEGORY: {
            return List(action.payload.data.results)
        }
        default:
            return state;
    }
})
