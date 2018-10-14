import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import CampaignList from '../components/Campaigns/CampaignList';

class Dashboard extends Component {
  render() {
    const { campaigns } = this.props;
    return (
      <div>
        <h1>dashboard</h1>
        <CampaignList campaigns={campaigns} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    campaigns: state.firestore.ordered.campaigns,
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'campaigns' }
  ]),
)(Dashboard);