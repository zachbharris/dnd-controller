import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ auth }) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav>
      <Link to="/">DND Controller</Link>
      { links }
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);