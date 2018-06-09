import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return (<Field key={`key-${name}`} component={SurveyField} type="text" label={label} name={name} />);
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.props.handleSubmit(this.props.onSurveySubmit)}>
                { this.renderFields() }
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button className="teal btn-flat right white-text" type="submit">
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.recipients || '');

    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);