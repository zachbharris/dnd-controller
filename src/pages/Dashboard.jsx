import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Grid, Segment } from 'semantic-ui-react';

import Dice from '../components/Dice';

class Dashboard extends Component {
  render() {
    const { auth, campaigns } = this.props;

    if (!auth.uid) return <Redirect to="/login" />
    return (
      <Container>
        <Grid stackable stretched>
          <Grid.Column width={10}>
            <Segment>
              testing
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Dice />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    campaigns: state.firestore.ordered.campaigns,
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'campaigns' }
  ]),
)(Dashboard);