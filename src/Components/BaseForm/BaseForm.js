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
          <Form>
            <div>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="span" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="span" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )
      }}
    />
  )
}

export default MyForm;