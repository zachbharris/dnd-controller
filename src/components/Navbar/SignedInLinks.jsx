import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

import Dropdown from '../Dropdown';

class SignedInLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      isOpen: false,
    }
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    const height = this.wrapper.current.clientHeight;
    const width = this.wrapper.current.clientWidth;

    this.setState({
      width,
      height
    })
  }

  toggleDropdown = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen, height, width } = this.state;
    const { signOut } = this.props;

    return (
      <ul>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/campaign/create">New Campaign</NavLink></li>
        <li>
          <button
            className="avatar"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={this.toggleDropdown}
            ref={this.wrapper}
          >
            click
          </button>
          <Dropdown
            isOpen={isOpen}
            height={height}
            width={width}
            toggleDropdown={this.toggleDropdown}
          >
            <button type="button" onClick={signOut}>Logout</button>
          </Dropdown>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
