import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import dice from './dice.svg';

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <nav className="navbar">
      <Link to="/"><SVG src={dice} /></Link>
      { links }
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);