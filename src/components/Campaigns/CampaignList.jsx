import React from 'react';
import { Link } from 'react-router-dom';

import CampaignSummary from './CampaignSummary';

const CampaignList = ({ campaigns }) => (
  <div className="campaign-list">
    {
      campaigns
      && campaigns.map(campaign => {
        return (
          <Link
            key={campaign.id}
            to={`/campaign/details/${campaign.id}`}
          >
            <CampaignSummary campaign={campaign} />
          </Link>
        )
      })
    }
  </div>
);

export default CampaignList;
