import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Campaign from '../pages/Campaign';

import CampaignDetails from '../components/Campaigns/CampaignDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/campaign/:type/:id" component={CampaignDetails} />
    <Route path="/campaign/:type" component={Campaign} />
    <Route path="/campaign/" component={Campaign} />
  </Switch>
)

export default withRouter(Routes);