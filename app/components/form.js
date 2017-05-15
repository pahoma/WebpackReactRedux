'use strict';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import formValidate from './formValidate';

export default (params) => {
    class Form extends Component {
       inputField = ({ input, label, type, meta: { touched, error, warning }}) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type}/>
                    {/* Field error */}
                    {touched && ((error && <div className="fieldError">{error}</div>))}
                </div>
            </div>
        );
        vFields = (list) => {
            return list.split(';').map((i) => {
                let v = i.split('|');
                return v.length == 1 ? formValidate[v[0]] : formValidate[v[0]].apply(null, v[1].split(','));
            });
        };
        render() {
            const { handleSubmit, reset, submitting, pristine, fields } = this.props;
            return (
                <form onSubmit={handleSubmit}>
                        {
                            fields.map(f => {
                                return <Field key={f.name} name={f.name} validate={this.vFields(f.validate)} component={this[f.component]} type={f.type} label={f.label} />
                            })
                        }
                        <div>
                            <button type="submit" disabled={submitting || this.props.invalid} >Submit</button>
                            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        </div>
                </form>
            )
        }
    }

    return reduxForm({
      form: params.name
    })(Form)
}
