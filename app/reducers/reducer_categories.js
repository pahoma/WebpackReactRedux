'use strict';

import { FETCH_BY_CATEGORY } from '../actions/types';

export default (categoryName) => ((state = [], action)=> {
    let FETCH_CATEGORY = FETCH_BY_CATEGORY[categoryName];
    //console.log('Action recieved', action);
    switch (action.type) {
        case FETCH_CATEGORY: {
            let data = action.payload.data.results;
            return data
        }
        default:
            return state;
    }
})
