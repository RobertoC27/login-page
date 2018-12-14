import React from 'react';
import { AuthConsumer } from '../../Containers/AuthContext/AuthContext';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <AuthConsumer>
      {({isAuth}) => (
        isAuth ? <div>authed</div> : <div>not authed</div>
      )}
    </AuthConsumer>
  </header>
)

export default Header;
