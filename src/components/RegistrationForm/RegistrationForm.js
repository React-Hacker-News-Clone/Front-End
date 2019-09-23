import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function RegistrationForm() {

  const initialFormValues = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  const SignupSchema = yup.object().shape({
    name: yup.string()
      .required('Name field is empty'),
    username: yup.string()
      .required('Please pick a username'),
    email: yup.string()
      .email('Invalid email')
      .required('Email field is empty'),
    password: yup.string()
      .min(6, 'Password must be 6 characters or more'),
  })

  const handleSubmit = values => {
    console.log(values);
    //write submit fuction later
  }

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
      render={() => {
        return (
          <Form>
            <div>
              <label>
                Name
                <Field name='name' type='text' placeholder='Name' />
              </label>
              <ErrorMessage name='name' component='div'/>
            </div>
            <div>
              <label>
                Username
                <Field name='username' type='text' placeholder='Pick a username' />
              </label>
              <ErrorMessage name='username' component='div' />
            </div>
            <div>
              <label>
                Email
                <Field name='email' type='email' placeholder='Email' />
              </label>
              <ErrorMessage name='email' component='div' />
            </div>
            <div>
              <label>
                Password
                <Field name='password' type='password' placeholder='Password' />
              </label>
              <ErrorMessage name='password' component='div' />
            </div>
            <button type='submit'>Submit</button>
          </Form>
        )
      }}
    />
  )
}

export default RegistrationForm;