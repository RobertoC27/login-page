import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SigninForm from './Containers/SigninForm/SigninForm';
import SignupForm from './Containers/SignupForm/SignupForm';
import AuthProvider from './Containers/AuthContext/AuthContext';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Switch>
          <Route to="/signup" exact component={SignupForm} />
          <Route to="/signin" exact component={SigninForm} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;