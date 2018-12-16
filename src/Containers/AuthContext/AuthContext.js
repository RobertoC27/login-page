import React, { Component } from 'react';

const AuthContext = React.createContext({isAuth: false});

class AuthProvider extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { isAuth: localStorage.getItem('token') }
  }

  login(tkn) {
    localStorage.setItem('token', tkn);
    this.setState({ isAuth: tkn });
  }

  logout() {
    this.setState({ isAuth: '' });
    localStorage.removeItem('token');
  }
  render() {
    return (
      <AuthContext.Provider value={{
        isAuth: this.state.isAuth,
        login: this.login,
        logout: this.logout
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const AuthConsumer = AuthContext.Consumer;
export default AuthProvider;
