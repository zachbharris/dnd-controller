import React from 'react'

const CampaignSummary = ({ campaign }) => (
  <div className="campaign-summary">
    <span className="campaign-summary-title">{campaign.title}</span>
    <p>Posted by {campaign.authorFirstName} {campaign.authorLastName}</p>
    <p></p>
  </div>
);

export default CampaignSummary;
