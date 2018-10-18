import React from 'react';
import moment from 'moment';

const CampaignSummary = ({ campaign }) => (
  <div className="campaign-summary">
    <span className="campaign-summary-title">{campaign.title}</span>
    <p>Posted by {campaign.authorFirstName} {campaign.authorLastName}</p>
    <p>{moment(campaign.createdAt.toDate()).calendar()}</p>
  </div>
);

export default CampaignSummary;
