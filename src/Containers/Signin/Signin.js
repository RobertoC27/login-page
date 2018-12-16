import React, { Component, Fragment } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import BaseForm from '../../Components/BaseForm/BaseForm';
import { AuthConsumer } from '../AuthContext/AuthContext';
import Alert from '../../Components/alertMessage/alertMessage';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().max(40).required()
});

class Signin extends Component {
  state = {}

  handleSubmit = async ({ email, password }) => {
    try {
      const resp = await axios.post('http://35.165.129.25:3090/signin', { email, password });
      this.setState({ tkn: resp.data.token });
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

  signin(login) {
    login(this.state.tkn);
  }

  render() {
    return (
      <AuthConsumer>
        {({ login }) => <Fragment>
          <h2>Enter your credentials</h2>
          <BaseForm valSchema={userSchema} providedSubmit={this.handleSubmit} action={() => this.signin(login)} />
          <Alert errMsg={this.state.errMsg} alertType="danger" />
        </Fragment>}
      </AuthConsumer>
    )
  }
}

export default Signin;
