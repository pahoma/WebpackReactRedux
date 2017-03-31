'use strict';

import React, { Component } from 'react';

export default class MoviePage extends Component {
    render(){
        return (
            <div>{JSON.stringify(this.props)}</div>
        )
    }
}
