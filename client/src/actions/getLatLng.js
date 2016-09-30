// var request = require("request");
import axios from 'axios';
import { LAT_LONG } from './actionTypes';

export function getLatLng() {
  return (dispatch) => {
    var lat = 0;
    var long = 0;
    var airport = '';

    function showLocation(positionA){
      console.log('Latitude: ' + positionA.coords.latitude + ' Longitude: ' + positionA.coords.longitude);

      lat = positionA.coords.latitude;
      long = positionA.coords.longitude;
        // findAirport(lat, long);

      const GEOCODE_API_KEY = 'AIzaSyCBUyBZfRmKN4pPHQXBL8YVoK3CLrYUbnA';
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GEOCODE_API_KEY}`;

      axios.get(geocodeUrl)
        .then((geocodeObj) => {
          const address = geocodeObj.data.results[0].formatted_address;
          var data = {
            latitude: lat,
            longitude: long,
            address: address,
            airport: airport,
          };

          dispatch({
            type: LAT_LONG,
            payload: data,
          });
        })
        .catch((error) => {
          console.error('Error inside axios get request for geocode address:', error);
        });
    }
    //  	function findAirport(lat, long){
	  //  		var url = 'https://airport.api.aero/airport/nearest/' + lat + '/' + long;
			// var options = {
			//   method: 'GET',
			//   url: url,
			//   qs: { user_key: '5104e059d6d5d46753e536ec5a185cea' },
			//   headers:
			//    { 'postman-token': 'ca848272-c2b3-2832-1c60-20627fe87fbb',
			//      'cache-control': 'no-cache',
			//      'content-type': 'application/json' }
			// };
			// request(options, function (error, response, body) {
		 //  	  if (error) throw new Error(error);
		 //  	  console.log(body);
			// });
			// airport = body.airports[0].code;
	  //  	}
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
