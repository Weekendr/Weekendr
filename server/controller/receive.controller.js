const fourSquareModel = require('../model/foursquare.model.js');

 /* req.body inside request {
  "cityName": "Los Angeles",
  "population": 3792621,
  "id": 5368361,
  "lat": 34.0522342,
  "lng": -118.2436849
 }
  */

function receiveCity(req, res) {
  fourSquareModel.explore(req.body)
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    console.log('error inside receiveCity inside receive.controller', err)
    res.end(err);
  });
}

exports.receive = {
  receiveCity
};