'use strict';

import React, { Component } from 'react';

export default class GenrePage extends Component {
    render(){
        return (
            <div>{JSON.stringify(this.props)}</div>
        )
    }
}
