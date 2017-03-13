'use strict';

import React, { Component } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default class App extends Component {
    render() {
        return (
            <div className="layout">
                <div className="content">
                    <Header />
                    { this.props.children }
                </div>
                <Footer />
            </div>
        )
    }
}
