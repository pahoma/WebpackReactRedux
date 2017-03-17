'use strict';

import { FETCH_GENRES } from '../actions/types';

export default ( state = [], action ) => {
    console.log('Action recieved', action);
    switch (action.type) {
        case FETCH_GENRES: {
            let genres = action.payload.data.genres;
            genres.isLoaded = true;
            return genres
        }
        default:
            return state;
    }
}
