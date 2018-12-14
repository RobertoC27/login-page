import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../../Containers/AuthContext/AuthContext';

const protectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        {...rest}
        render={props => (
          isAuth
            ? <Component {...props} />
            : <Redirect to="/" />
        )}
      />
    )}
  </AuthConsumer>
)

export default protectedRoute;