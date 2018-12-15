import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../AuthContext/AuthContext';

const landing = () => {
  return (
    <AuthConsumer>
      {({ isAuth, logout }) => (
        isAuth
          ? <Link to="/" onClick={logout}>Wanna logout?</Link>
          : <Link to="/signin">Hello, please sign in!</Link>
      )}
    </AuthConsumer>
  )
}

export default landing;