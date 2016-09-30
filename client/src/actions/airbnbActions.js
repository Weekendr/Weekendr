import axios from 'axios';
import { AIRBNB_LISTINGS } from './actionTypes';

export function fetchAirbnbListings(props) {
  const clientId = '3092nxybyb0otqw18e8nh5nty';
  const address = props.coordinates.address;
  const lat = props.coordinates.latitude;
  const lng = props.coordinates.longitude;
  const endpoint = `https://api.airbnb.com/v2/search_results?client_id=${clientId}&location=${address}&user_lat=${lat}&user_lng=${lng}`;

  // const options = {
  //   address: props.coordinates.address,
  //   lat: props.coordinates.latitude,
  //   lng: props.coordinates.longitude
  // };

  return (dispatch) => {
    axios.get(endpoint)
    // axios.get('/api/airbnb/getListings', options)
      .then((data) => {
        console.log('Data from axios.get call inside fetchAirbnbListings in airbnbActions:', data);
        dispatch({
          type: AIRBNB_LISTINGS,
          payload: data
        });
      })
      .catch((err) => {
        console.error('Error inside fetchAirbnbListings in airbnbActions: ', err);
      });
  };
}
