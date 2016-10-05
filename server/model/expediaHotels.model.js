// require('dotenv').config();
const request = require('request');
const Promise = require('bluebird');

expediaHotelsModel = module.exports;

expediaHotelsModel.findHotels = (params) => {
  const budget = params;

  var checkOutDate = new Date(params.date);
  checkOutDate.setDate(checkOutDate.getDate() + 2)
  checkOutDate = checkOutDate.toJSON().slice(0,10).toString();

  const qs = {
    apikey: process.env.expedia_consumer_key,
    room1: params.numTravelers,
    checkInDate: params.date,
    checkOutDate: checkOutDate,
    city: params.name,
    resultsPerPage: -1
  };

  return new Promise((resolve, reject) => {
    const url = {
      method: 'GET',
      uri: 'http://terminal2.expedia.com/x/mhotels/search',
      qs
    };

    request(url, (error, response, body) => {
      if (error)
         return reject(error);

      return resolve(JSON.parse(body).hotelList.filter(hotel => hotel.isHotelAvailable));
    });
  });
};