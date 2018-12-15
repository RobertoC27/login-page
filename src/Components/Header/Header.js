import React from 'react';
import { AuthConsumer } from '../../Containers/AuthContext/AuthContext';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" >SimpleLog</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" exact className="nav-item nav-link">Home<span className="sr-only">(current)</span></NavLink>
          <AuthConsumer>
            {({ isAuth, logout }) => (
              isAuth
                ? (<div>
                  <NavLink to="/dashboard" className="nav-item nav-link d-inline-flex">Dashboard</NavLink>
                  <Link to="/" exact className="nav-item nav-link d-inline-flex" onClick={logout}>Logout</Link>
                </div>)
                : (<div>
                  <NavLink to="/signup" className="nav-item nav-link d-inline-flex">Sign up</NavLink>
                  <NavLink to="/signin" className="nav-item nav-link d-inline-flex">Sign in</NavLink>
                </div>)
            )}
          </AuthConsumer>
        </div>
      </div>
    </nav>
  </div>
)

export default Header;
