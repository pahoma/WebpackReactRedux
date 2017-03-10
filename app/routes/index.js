'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './../components/app';

const Dashboard = React.createClass({
    render() {
        return <div>Dashboard!</div>
    }
})

const About = React.createClass({
    render() {
        return <div>About!</div>
    }
})

const Inbox = React.createClass({
    render() {
        return <div>{this.props.children}</div>
    }
})

const Message = React.createClass({
    render() {
        return <h3>Welcome page with id {this.props.params.id}</h3>
    }
})

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message} />
        </Route>
    </Route>
);
