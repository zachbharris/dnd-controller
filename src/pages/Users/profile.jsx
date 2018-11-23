import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    const { auth } = this.props;
    return (
      <div>
        <p>profile</p>
        <p></p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Profile);
