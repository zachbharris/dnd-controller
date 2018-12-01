import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import dice from './dice.svg';

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Image size="mini" src={dice} style={{ marginRight: "1rem" }} />
          D&amp;D Controller
        </Menu.Item>

        { links }
      </Container>
    </Menu>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);