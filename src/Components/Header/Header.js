import React from 'react';
import { AuthConsumer } from '../../Containers/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        isAuth
          ? (<div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/">Home</Link> 
            </div>)
          : (<div>
            <Link to="/signup">Sign up</Link> 
            <Link to="/signin">Sign in</Link>
          </div>)
      )}
    </AuthConsumer>
  </header>
)

export default Header;
