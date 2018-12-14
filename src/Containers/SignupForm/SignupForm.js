import React, { Component, Fragment } from 'react';
import BaseForm from '../../Components/BaseForm/BaseForm';
import * as Yup from 'yup';
import axios from 'axios';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).max(40).required()
});

class SignupForm extends Component {
  state = {}

  handleSubmit = async ({ email, password }) => {
    try {
      await axios.post('http://35.165.129.25:3090/signup', {email, password});
    } catch (error) {
      this.setState({ err: error.response.data.error });
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Signup</h2>
        <BaseForm valSchema={userSchema} providedSubmit={this.handleSubmit}/>
        {this.state.err}
      </Fragment>
    )
  }
}

export default SignupForm;
