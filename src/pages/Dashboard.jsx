import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Card, Container, Grid } from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
    const { auth, campaigns } = this.props;

    if (!auth.uid) return <Redirect to="/login" />
    return (
      <Container>
        <Grid stackable>
          <Grid.Column width={6}>
            <Card fluid>
              <Card.Content>
                <Card.Header content="Characters" />
              </Card.Content>
              <Card.Content>
                poo
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  more poo
                </Card.Description>
              </Card.Content>
            </Card>
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
    characters: state.firestore.characters
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'campaigns' }
  ]),
)(Dashboard);