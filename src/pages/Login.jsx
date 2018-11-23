import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";

import { signIn } from "../store/actions/authActions";
import Logo from "../components/Navbar/dice.svg";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    const { signIn } = this.props;
    const { email, password } = this.state;

    // need to store credentials in an object
    const creds = { email, password };
    signIn(creds);
  };

  render() {
    const { auth, authError } = this.props;
    const { email, password, loading } = this.state;

    return (
      <div className="login-form">
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header>
              <Image src={Logo} />
            </Header>
            <Form>
              <Segment textAlign="left">
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  label="Email"
                  labelPosition="left"
                  placeholder="Enter your email"
                  name="email" id="email"
                  type="email"
                  icon="mail"
                  fluid
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={password}
                  label="Password"
                  placeholder="Enter your password"
                  name="password" id="password"
                  type="password"
                  icon="lock"
                  fluid
                />
                <Button
                  onClick={this.handleSubmission}
                  loading={loading}
                  icon="sign in"
                  content="Login"
                  fluid
                  basic
                />
              </Segment>
            </Form>
            <Message>
              Don't have an account? <Link to="/register">Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
