'use strict';

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    return (
        <div>
            <Link to={"/movies/"+props.movie.id } >
                <img src={"http://image.tmdb.org/t/p/w300"+props.movie.poster_path } />
                <span>{props.movie.title}</span>
            </Link>
        </div>
    );
}
