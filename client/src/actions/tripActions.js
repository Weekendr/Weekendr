import axios from 'axios';
import { SELECTED_CITY } from './actionTypes';

export function sendSelectedCity(props, quizAnswers) {
  const options = {
    name: props.cityName,
    id: props.id,
    lat: props.lat,
    lng: props.lng,
    countryCode: props.countrycode,
    answers: quizAnswers,
  };
  return (dispatch) => {
    axios.post('/api/receive/receiveCity', options)
    .then((data) => {
      dispatch({
        type: SELECTED_CITY,
        payload: data
      });
    })
    .catch(function(err) {
      console.log('error inside sendSelectedCity inside TripAction', err)
    });
  };
}