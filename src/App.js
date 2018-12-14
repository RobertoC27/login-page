import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Containers/AuthContext/AuthContext';
import Header from './Components/Header/Header';


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;