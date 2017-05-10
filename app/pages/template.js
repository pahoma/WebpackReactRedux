'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class TemplatePage extends Component {
    render () {
        return (
            <div>Template Page </div>
        )
    }
}

/*

function mapDispatchToProps( dispatch ){ return bindActionCreators( { actionGet }, dispatch ) }
function mapStateToProps({ property }){ return { property } }

export default connect( mapStateToProps, mapDispatchToProps )(TemplatePage);

*/

export default connect()(TemplatePage);


