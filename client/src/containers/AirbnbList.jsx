import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AirbnbListItem from '../components/AirbnbListItem';

class AirbnbList extends Component {
  renderListings() {
    return this.props.airbnb.listings.map((listing) => {
      return (
        <AirbnbListItem
          key={listing.listing.id}
          thumbnail={listing.listing.picture_url}
          name={listing.listing.name}
          price={listing.pricing_quote.localized_nightly_price}
          city={listing.listing.city}
          capacity={listing.listing.person_capacity}
          beds={listing.listing.bedrooms}
          baths={listing.listing.bathrooms}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderListings()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    airbnb: state.airbnb
  };
}

export default connect(mapStateToProps)(AirbnbList);
