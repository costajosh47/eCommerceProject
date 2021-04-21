import React, { Component } from 'react';
                                           
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
    render () {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' 
                type='email' 
                title='eMail' 
                placeholder='eMail' 
                name='email' 
                component={FormInput} 
                />
                <Field className='sign-in-form__email' 
                type='password' 
                title='Password' 
                placeholder='Password' 
                name='password' 
                component={FormInput} 
                />
                <Field className='sign-in-form__email' 
                onClick={() => console.log('tryna sumbit')}
                type='submit' 
                title='Login'  
                name='login' 
                component={FormButton} 
                />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;