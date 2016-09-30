const request = require('request');
require('dotenv').config();

function getListings(params) {
  const clientId = process.env.airbnb_client_id;
  const url = `https://api.airbnb.com/v2/search_results?client_id=${clientId}`;

  return new Promise((resolve, reject) => {
    const options = {
      uri: url,
      qs: {
        location: params.address,
        user_lat: params.lat,
        user_lng: params.lng
      }
    };
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        console.log('Error inside getListings in Airbnb model:', error);
        reject(error);
      }
    })
  });
};

exports.listings = {
  get: getListings
}
