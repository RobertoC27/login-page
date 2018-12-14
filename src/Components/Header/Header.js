import React from 'react';
import { AuthConsumer } from '../../Containers/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        isAuth
          ? <button onClick={logout}>Logout</button>
          : <button onClick={login}>Login</button>
      )}
    </AuthConsumer>
  </header>
)

export default Header;
