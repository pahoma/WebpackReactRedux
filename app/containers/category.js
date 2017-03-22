'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviesByCategory } from '../actions';
import MovieTile from '../components/movie-tile';

export default (categoryName) => {
    class Category extends Component {

        componentWillMount(){
            this.props.fetchMoviesByCategory(categoryName);
        }

        renderTiles(movie){
            return (
                <li key={movie.id} >
                    <MovieTile movie={movie} />
                </li>
            )
        }

        render(){
            return (
                <div className="category">
                    <h2>{this.props.title}</h2>
                    <div className="carousel">
                        <a href="" class="navigation previous">&laquo;</a>
                        <a href="" class="navigation next">&raquo;</a>
                        <ul>
                            { this.props[categoryName].map(this.renderTiles) }
                        </ul>
                    </div>
                </div>
            )
        }
    }

    let stateToProps = {};
    stateToProps[categoryName] = categoryName;

    function mapDispatchToProps( dispatch ) { return bindActionCreators({ fetchMoviesByCategory }, dispatch) };
    function mapStateToProps( stateToProps ){ return stateToProps };

    return connect( mapStateToProps, mapDispatchToProps )(Category);
}

