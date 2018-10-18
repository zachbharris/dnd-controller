import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

const CampaignDetails = ({ campaign }) => {
  if (campaign) {
    return (
      <div className="campaign-details">
        <span className="campaign-title">{campaign.title} - {campaign.id}</span>
        <p>{campaign.description}</p>
        <p>Created by: {campaign.authorFirstName} {campaign.authorLastName}</p>
        <p>{moment(campaign.createdAt.toDate()).calendar()}</p>
      </div>
    );
  }

  return (<h1>loading project...</h1>);
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const campaigns = state.firestore.data.campaigns;
  const campaign = campaigns ? campaigns[id] : null;
  return {
    campaign: campaign,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'campaigns' }
  ])
)(CampaignDetails);
