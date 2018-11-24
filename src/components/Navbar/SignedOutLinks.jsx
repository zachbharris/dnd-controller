import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const SignedOutLinks = () => {
  return (
    <Menu.Menu position="right">
      <Menu.Item as={Link} to="/register" content="Register" />
      <Menu.Item as={Link} to="/login" content="Login" />
    </Menu.Menu>
  );
}

export default SignedOutLinks;
