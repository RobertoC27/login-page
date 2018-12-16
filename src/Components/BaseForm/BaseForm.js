import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Alert from '../../Components/alertMessage/alertMessage';

const MyForm = ({ providedSubmit, valSchema, action }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, actions) => {
        await providedSubmit(values);
        if (action)
          action();

        actions.setSubmitting(false);
      }}
      validationSchema={valSchema}
      render={formikProps => {
        return (
          <Form className="container col-3 mx-auto">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field id="email" name="email" type="email" placeholder="Email" className="form-control" />
              <ErrorMessage name="email" component="div" className="alert-sm alert-warning rounded text-center" role="alert" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" placeholder="Password" className="form-control" />
              <ErrorMessage name="password" component="div" className="alert-sm alert-warning rounded text-center" role="alert" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={formikProps.isSubmitting}>Submit</button>
            {formikProps.isSubmitting
              ? <Alert errMsg="sending info to server..." alertType="info" width="w-auto my-3" />
              : null
            }
          </Form>
        )
      }}
    />
  )
}

export default MyForm;