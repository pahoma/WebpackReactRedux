'use strict';

import React, { Component } from 'react';
import GenresList from '../containers/genresList';
import CategoryContainer from '../containers/category';

let TopRated = CategoryContainer('top_rated');
let Popular = CategoryContainer('popular');
let Upcoming = CategoryContainer('upcoming');
let NowPlaying = CategoryContainer('now_playing');

export default class DashboardPage extends Component {
    render() {
        return  <div className="dashboard">
            <GenresList />
            <TopRated title="Top rated" />
            <Popular title="Popular" />
            <Upcoming title="Upcoming" />
            <NowPlaying title="Now Playing" />
        </div>
    }
}
