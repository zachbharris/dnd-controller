import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { signIn } = this.props;
    signIn(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    const { email, password } = this.state;

    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form name="signIn" onSubmit={this.handleSubmit}>
          <h2>sign in</h2>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter password"
          />
          <button type="submit">Sign In</button>
          {authError ? authError : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
