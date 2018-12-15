import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Containers/AuthContext/AuthContext';
import Header from './Components/Header/Header';
import Landing from './Containers/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Signin from './Containers/Signin/Signin';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Switch>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;