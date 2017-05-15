'use strict'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FormTemplate from '../components/form';

const SignUpFormComponent = FormTemplate({ name: 'signup' });

class SignUpForm extends PureComponent {
    constructor(props) {
        super(props);
    }
    handleSubmit = (values) => {
        console.log(...arguments);
    };
    render() {
        const { post, dispatch } = this.props;
        let fields = [
            {
                name: 'firstName', type: "text", label: "First Name",
                component: 'inputField', validate: 'required;inRange|2,18'
            },
            {
                name: 'lastName', type: "text", label: "Last Name",
                component: 'inputField', validate: 'inRange|2,18'
            },
            {
                name: 'email', type: "email", label: "Email",
                component: 'inputField', validate: 'required;email'
            },
            {
                name: 'password', type: "password", label: "Password",
                component: 'inputField', validate: 'required'
            }
        ];
        return (
            <div>
                <SignUpFormComponent handleSubmit={this.handleSubmit} fields={fields} />
                <div>
                    { JSON.stringify( this.props.form ? this.props.form.values : {}, null, 4 ) }
                </div>
            </div>
        );
    }
}

// function mapDispatchToProps( dispatch ) { return bindActionCreators({ fetchMoviesByCategory }, dispatch) };
function mapStateToProps( {form} ){ return { form: form['signup']} };

export default connect( mapStateToProps )( SignUpForm );


