import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";

import { signIn } from "../store/actions/authActions";
import Logo from "../components/Navbar/dice.svg";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {
      email: false,
      password: false
    }
  };

  componentWillReceiveProps(nextProps) {
    const { authError } = this.props;
    if (nextProps.authError !== authError) {
      this.setState({ error: { email: false, password: false } });

      if (nextProps.authError.code !== undefined) {
        if (nextProps.authError.code.includes("password")) {
          this.setState({ error: { password: true } });
        }

        if(nextProps.authError.code.includes("email")) {
          this.setState({ error: { email: true } });
        }
      }
    }
  }

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
    const { auth, authError, loading } = this.props;
    const { email, password, error } = this.state;

    if (auth.uid) return <Redirect to="/" />
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
                  error={error.email}
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
                  error={error.password}
                />
                <Button.Group basic fluid>
                  <Button
                    type="submit"
                    onClick={this.handleSubmission}
                    loading={loading}
                    icon="sign in"
                    content="Login"
                  />
                </Button.Group>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    loading: state.auth.isLoading,
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
