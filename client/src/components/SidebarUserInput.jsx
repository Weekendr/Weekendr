import React, { Component } from 'react';

export default class SidebarUserInput extends Component {
  render() {
    return (
      <div>
        <h6><strong>Your Trip Details:</strong></h6>
        <p>Budget: {this.props.budget}</p>
        <p>Number of Travelers: {this.props.numTravelers}</p>
        <p>Travel Date: {this.props.date}</p>
      </div>
    );
  }
}
