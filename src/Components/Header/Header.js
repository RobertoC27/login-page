import React from 'react';
import { AuthConsumer } from '../../Containers/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        isAuth
          ? (
            <div>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={logout}>Logout</button>
            </div>)
          : <button onClick={login}>Login</button>
      )}
    </AuthConsumer>
  </header>
)

export default Header;
