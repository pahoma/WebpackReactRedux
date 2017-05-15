'use strict'

import React from 'react';
import { Link } from 'react-router';


export default (props) => {
    return (
        <ul>
            <li><Link to={"/reduxform" } >Form</Link></li>
            <li><Link to={"/dashboard" } >Dashboard</Link></li>
            <li><Link to={"/template" } >Template</Link></li>
        </ul>
    );
}
