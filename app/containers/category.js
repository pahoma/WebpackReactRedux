'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviesByCategory } from '../actions';

export default (categoryName) => {
    class Category extends Component {
        componentWillMount(){
            this.props.fetchMoviesByCategory(categoryName);
        }

        render(){
            return <div className="category">
                <h2>{this.props.title}</h2>
                <ul>
                    { this.props[categoryName].map((movie)=>{
                        return <li>{movie.title}</li>
                    }) }
                </ul>
            </div>
        }
    }

    let stateToProps = {};
    stateToProps[categoryName] = categoryName;

    function mapDispatchToProps( dispatch ) { return bindActionCreators({ fetchMoviesByCategory }, dispatch) };
    function mapStateToProps( stateToProps ){ return stateToProps };

    return connect( mapStateToProps, mapDispatchToProps )(Category);
}

