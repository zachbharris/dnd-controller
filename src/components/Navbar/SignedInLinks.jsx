import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut }) => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">New Campaign</NavLink></li>
        <li><button type="button" onClick={signOut}>Log Out</button></li>
        <li><NavLink to="/">User</NavLink></li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
