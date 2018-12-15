import React, { Component, Fragment } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import BaseForm from '../../Components/BaseForm/BaseForm';
import { AuthConsumer } from '../AuthContext/AuthContext';
import ServerError from '../../Components/ServerError/ServerError';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().max(40).required()
});

class Signin extends Component {
  state = {}

  handleSubmit = async ({ email, password }) => {
    try {
      await axios.post('http://35.165.129.25:3090/signin', { email, password });
      this.props.history.push('/dashboard');
    } catch (error) {
      if (error.response)
        this.setState({ errMsg: "Email or Password are incorrect" })
      else if (error.request)
        this.setState({ errMsg: 'Couldn\'t contact the server, please try again later' })
      else
        this.setState({ errMsg: 'Unknown error, please try again later or contact us' })
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
          <h2>Enter your credentials</h2>
          <BaseForm valSchema={userSchema} providedSubmit={this.handleSubmit} action={() => this.verifySucces(login)} />
          <ServerError errMsg={this.state.errMsg} />
        </Fragment>}
      </AuthConsumer>
    )
  }
}

export default Signin;
