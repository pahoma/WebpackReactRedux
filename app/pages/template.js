'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class TemplatePage extends Component {
    componentDidMount() {

    }
    render () {
        return (
            <div>Template Page </div>
        )
    }
}

/*
TemplatePage.PropTypes = {
    any: any
}

function mapDispatchToProps( dispatch ){ return bindActionCreators( { actionGet }, dispatch ) }
function mapStateToProps({ property }){ return { property } }

export default connect( mapStateToProps, mapDispatchToProps )(TemplatePage);

*/

        // function* goo (x) {
        //  var y = 2 * (yield (x + 1));
        //  var z = yield (y / 3);
        //     return (x + y + z);
        // }

        //  var it = goo( 5 );
        //  console.log( it.next() );
        //  console.log( it.next( ) );
        //  console.log( it.next( 11 ) );
        //  console.log( it.next( 11 ) );

export default connect()(TemplatePage);



