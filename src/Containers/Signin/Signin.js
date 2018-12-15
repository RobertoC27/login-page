import React, { Component, Fragment } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import BaseForm from '../../Components/BaseForm/BaseForm';
import { AuthConsumer } from '../AuthContext/AuthContext';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().max(40).required()
});

class Signin extends Component {
  state = {}

  handleSubmit = async ({ email, password }) => {
    console.log(this.props);
    try {
      await axios.post('http://35.165.129.25:3090/signin', { email, password });
      this.props.history.push('/dashboard');
    } catch (error) {
      this.setState({ errMsg: "Email or Password are incorrect" })
    }
  }
  verifySucces(login) {
    if (this.state.errMsg)
      return
    login();
  }
  render() {
    return (
      <AuthConsumer>
        {({ login }) => <Fragment>
          <BaseForm valSchema={userSchema} providedSubmit={this.handleSubmit} action={() =>this.verifySucces(login)} />
          {this.state.errMsg}
        </Fragment>}
      </AuthConsumer>
    )
  }
}

export default Signin;
