import axios from 'axios';
import { LAT_LONG } from './actionTypes';
import {geocode_API_KEY} from '../config/googleConfig.js';

export function getLatLng() {
  return (dispatch) => {  
    let lat = 0;
    let long = 0;
    function showLocation(positionA) {
      console.log('Latitude: ' + positionA.coords.latitude + ' Longitude: ' + positionA.coords.longitude);

      lat = positionA.coords.latitude;
      long = positionA.coords.longitude;
        const GEOCODE_API_KEY = geocode_API_KEY;
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GEOCODE_API_KEY}`;
      axios.get(geocodeUrl)
        .then((geocodeObj) => {
          const address = geocodeObj.data.results[0].formatted_address;
          var data = {
            latitude: lat,
            longitude: long,
            address: address,
          };

          dispatch({
            type: LAT_LONG,
            payload: data,
          });
        })
        .catch((error) => {
          console.error('Error inside axios get request for geocode address:', error);
        });
      let data = {
        latitude: lat,
        longitude: long,
      };
      dispatch({
        type: LAT_LONG,
        payload: data,
      });
    }
	  function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    }
  getLocation();
  };
}