import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Campaign from "../pages/Campaign";
import Profile from "../pages/Users/profile";

import CampaignDetails from "../components/Campaigns/CampaignDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />

    {/* user routes */}
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/user/:id" component={Profile} />

    {/* campaign routes */}
    <Route path="/campaign/:type/:id" component={CampaignDetails} />
    <Route path="/campaign/:type" component={Campaign} />
    <Route path="/campaign/" component={Campaign} />
  </Switch>
);

export default withRouter(Routes);
