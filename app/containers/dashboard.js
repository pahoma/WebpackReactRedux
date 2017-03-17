'use strict';

import React, { Component } from 'react';
import GenresList from './genresList';

export default class Dashboard extends Component {
    render() {
        let categories = {
            'top_rated' : {

            }
        };

        return <div className="dashboard">
            <GenresList />
            Dashboard!
        </div>
    }
}
