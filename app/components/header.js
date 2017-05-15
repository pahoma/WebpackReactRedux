'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header" ><h1><Link to="/">Movies cafe</Link></h1></div>
        )
    }
}


