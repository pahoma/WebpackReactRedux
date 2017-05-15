'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenres } from '../actions';
import { Link } from 'react-router';

export class GenresList extends Component {

    componentDidMount(){
        console.log('componentWillMount GenresList');
        if(!this.props.genres.length) this.props.fetchGenres();
    }

    render() {
        const { genres } = this.props;
        return (
            <ul className="genrelist" >
                {
                    genres.map(
                        (genre) => (
                            <li key={genre.id} >
                                <Link to={"/genres/"+genre.id } >
                                    { genre.name }
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}

function mapDispatchToProps( dispatch ) { return bindActionCreators({ fetchGenres }, dispatch) };
function mapStateToProps({ genres }){ return {genres} };

export default connect( mapStateToProps, mapDispatchToProps )(GenresList);
