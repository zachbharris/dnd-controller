import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCampaign } from '../../store/actions/campaignActions';

class CreateCampaign extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  // INFO: simple change handler that uses target id to update corosponding state
  // NOTE: id value must match state name
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { createCampaign } = this.props;
    createCampaign(this.state);
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className="container">
        <form name="createCampaign" onSubmit={this.handleSubmit}>
          <h2>Create a new Campaign</h2>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Enter campaign title"
          />
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Enter campaign description"
          />
          <button type="submit">create campaign</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCampaign: (campaign) => dispatch(createCampaign(campaign))
  };
};

export default connect(null, mapDispatchToProps)(CreateCampaign);
