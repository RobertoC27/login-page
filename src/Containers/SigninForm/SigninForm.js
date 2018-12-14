import React, { Component, Fragment } from 'react';
import * as Yup from 'yup';
import BaseForm from '../../Components/BaseForm/BaseForm';
import axios from 'axios';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().max(40).required()
});

class SigninForm extends Component {
  state = {}
  handleSubmit = async ({ email, password }) => {
    try {
      const resp = await axios.post('http://35.165.129.25:3090/signin', { email, password });
    } catch (error) {
      this.setState({ err: "Email or Password are incorrect" })
    }
  }
  render() {
    return (
      <Fragment>
        <h2>Sign in</h2>
        <BaseForm valSchema={userSchema} providedSubmit={this.handleSubmit} />
        {this.state.err}
      </Fragment>
    )
  }
}


export default SigninForm;