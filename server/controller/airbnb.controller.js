const model = require('../model/airbnb.model');

function getListings(req, res) {
  model.listings.get()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}

exports.listings = {
  get: getListings
}
