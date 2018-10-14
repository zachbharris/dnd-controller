import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import CreateCampaign from '../components/Campaigns/CreateCampaign';
import CampaignDetails from '../components/Campaigns/CampaignDetails';

class Campaign extends Component {
  componentDidMount() {}

  render() {
    const { match } = this.props;
    if (match.params.type) {
      if (match.params.type === 'create') {
        return (
          <CreateCampaign />
        );
      }
      if (match.params.type === 'details') {
        return <CampaignDetails />
      }
      return <Redirect to="/campaign" />;
    }
    return <h1>default campaign page</h1>;
  }
}

export default Campaign;
