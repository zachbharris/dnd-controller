import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    const { email, password, firstName, lastName } = this.state;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>sign up</h2>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            type="test"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
          { authError ? <p>{authError}</p> : null }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);