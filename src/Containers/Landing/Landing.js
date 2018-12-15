import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../AuthContext/AuthContext';

const landing = () => {
  return (
    <AuthConsumer>
      {({ isAuth, logout }) => (
        isAuth
          ? <Link to="/" onClick={logout}>Wanna logout?</Link>
          : <div>
            <Link to="/signin">Hello, please signin!</Link>
            <br/>
            <Link to="/signup">or signup!</Link>
          </div>
      )}
    </AuthConsumer>
  )
}

export default landing;