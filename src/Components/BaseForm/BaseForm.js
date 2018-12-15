import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MyForm = ({ providedSubmit, valSchema, action }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        providedSubmit(values);
        if(action)
          action();
      }}
      validationSchema={valSchema}
      render={formikProps => {
        return (
          <Form className="container col-3 mx-auto">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field id="email" name="email" type="email" placeholder="Email" className="form-control"/>
              <ErrorMessage name="email" component="div" className="alert-sm alert-warning rounded text-center" role="alert"/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" placeholder="Password" className="form-control"/>
              <ErrorMessage name="password" component="div" className="alert-sm alert-warning rounded text-center" role="alert"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        )
      }}
    />
  )
}

export default MyForm;