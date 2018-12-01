import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Image, Menu, Segment } from 'semantic-ui-react';

import { signOut } from '../../store/actions/authActions';

const Avatar = (
  <span>
    <Image
      src="https://avatarfiles.alphacoders.com/122/thumb-122410.png"
      avatar
      circular
    />
  </span>
)

class SignedInLinks extends Component {
  render() {
    const { signOut } = this.props;

    return <Menu.Menu position="right">
        <Menu.Item as={Link} to="/campaigns" content="Campaigns" />
        <Dropdown trigger={Avatar} icon={null} item simple direction="left">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/account" text="Account Settings" icon="cog" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);