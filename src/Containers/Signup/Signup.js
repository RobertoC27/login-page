import React, { Component, Fragment } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import BaseForm from '../../Components/BaseForm/BaseForm';
import { AuthConsumer } from '../AuthContext/AuthContext';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).max(40).required()
});

class Signup extends Component {
  state = {}

  handleSubmit = async ({ email, password }) => {
    try {
      await axios.post('http://35.165.129.25:3090/signup', { email, password });
      this.props.history.push('/signin');
    } catch (error) {
      this.setState({ errMsg: error.response.data.error })
    }
  }

  render() {
    return (
      <AuthConsumer>
        {({ }) => (
          <Fragment>
            <h2>Sign up today!</h2>
            <BaseForm valSchema={userSchema} providedSubmit={this.handleSubmit} />
            {this.state.errMsg}
          </Fragment>
        )}
      </AuthConsumer>
    )
  }
}

export default Signup;