const request = require('request');
// require('dotenv').config();
const clientId = process.env.airbnb_client_id;
const Promise = require('bluebird');

exports.getListings = (params) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.airbnb.com/v2/search_results',
      qs: {
        client_id: clientId,
        locale: 'en-US',
        currency: 'USD',
        _format: 'for_search_results',
        _limit: 20,
        guests: params.numTravelers,
        location: params.name,
        price_max: params.budget,
        user_lat: params.lat,
        user_lng: params.lng,
        location: params.origin.address,
        user_lat: params.origin.latitude,
        user_lng: params.origin.longitude,
      },
      headers: {
        'postman-token': '5dd567cc-414b-b2ab-1305-0ad7c0478aeb',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
      },
      json: true,
    };

    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        return resolve(body);
      } else {
        console.log('Error inside getListings in Airbnb model:', error);
        reject(error);
      }
    });
  });
};
