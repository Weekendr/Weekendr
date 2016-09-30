import React, { Component } from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

export default class AirbnbListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col sm={12} md={6} lg={4}>
          <Thumbnail src={this.props.thumbnail}>
            <h6><strong>{this.props.name}</strong></h6>
            <p>Price: ${this.props.price}/night</p>
            <p>City: {this.props.city}</p>
            <p>Capacity: {this.props.capacity} people</p>
            <p>Bedrooms: {this.props.beds}</p>
            <p>Bathrooms: {this.props.baths}</p>
            <p>
              <Button bsStyle="primary">See details</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}
