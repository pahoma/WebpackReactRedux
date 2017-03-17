'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenres } from '../actions';
import { Link } from 'react-router';

export class GenresList extends Component {

    componentWillMount(){
        if(!this.props.genres.length) this.props.fetchGenres();
    }

    render() {
        return (
            <ul className="genrelist" >
                {
                    this.props.genres.map(
                        (genre) => (
                            <li>
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
