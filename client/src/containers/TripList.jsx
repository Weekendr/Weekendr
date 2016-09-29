import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSelectedCity } from '../actions/tripActions';
import TripListItem from '../components/TripListItem';

class TripList extends Component {
  constructor(props) {
    super(props);
    this.renderTrips = this.renderTrips.bind(this);
    this.onSelectCity = this.onSelectCity.bind(this);
  }

  onSelectCity(city, answers) {
    this.props.sendSelectedCity(city, answers);
  }

  renderTrips() {
    return this.props.received.data.geonames.map((city, index) => {
      return (
        <TripListItem
        key={index}
        cityName = {city.name}
        population={city.population}
        id = {city.geonameId}
        lat = {city.lat}
        lng = {city.lng}
        countryCode = {city.countrycode}
        onSelectCity = {this.onSelectCity}
        answers = {this.props.quizAnswers}
        >
        </TripListItem>
      );
    });
  }

  render() {
    return (
      <div className="TripList Col-xs={4} xsOffset={2} md={4}">
        {this.renderTrips()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    received: state.receivedCities,
    quizAnswers: state.quiz.quizAnswers,
  };
}

// send TripModified Data to trip_reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendSelectedCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
