import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";

import { signUp } from "../store/actions/authActions";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp(this.state);
  };

  render() {
    const { auth, authError, loading } = this.props;
    const { email, password, confirmPassword, firstName, lastName } = this.state;

    if (auth.uid) return <Redirect to="/" />
    return <Fragment>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form>
              <Segment textAlign="left">
                <Form.Input onChange={this.handleChange} value={email} label="Email" placeholder="Enter your email" name="email" id="email" type="email" fluid />
                <Form.Group widths="2">
                  <Form.Input onChange={this.handleChange} value={password} label="Password" placeholder="Enter your password" name="password" id="password" type="password" fluid />
                  <Form.Input onChange={this.handleChange} value={confirmPassword} label="Confirm Password" placeholder="Confirm your password" name="confirmPassword" id="confirmPassword" type="password" fluid />
                </Form.Group>
                <Form.Input onChange={this.handleChange} value={firstName} label="First Name" placeholder="Albus" name="firstName" id="firstName" type="text" fluid />
                <Form.Input onChange={this.handleChange} value={lastName} label="Last Name" placeholder="Dumbledore" name="lastName" id="lastName" type="text" fluid />
                <Button.Group basic fluid>
                  <Button type="submit" onClick={this.handleSubmission} loading={loading} content="Register" />
                </Button.Group>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
