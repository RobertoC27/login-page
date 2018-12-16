import React from 'react'; 
import {AuthConsumer} from '../../Containers/AuthContext/AuthContext';

const signout = () => {
  return(
    <AuthConsumer>
      {({isAuth, logout}) => (
        isAuth
        ? <h2>See you later!</h2>
        : <h2>You need to login first!</h2>
      )}
    </AuthConsumer>
  )
}

export default signout;
