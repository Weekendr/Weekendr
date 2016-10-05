const Promise = require('bluebird');
const _ = require('underscore');
const fourSquareModel = require('../model/foursquare.model');
const googleFlights = require('../model/googleFlights.model');
const airbnbModel = require('../model/airbnb.model');
const expediaHotelsModel = require('../model/expediaHotels.model');
const createBundles = require('./createBundles.js');

/****** REQ.BODY  ********
 req.body inside receiveCity { name: 'Tijuana',
  id: 3981609,
  lat: 32.502698,
  lng: -117.003714,
  answers:
   [ { title: 'Transportation', option: [Object] },
     { title: 'Lodging', option: [Object] },
     { title: 'Outdoor Activities', option: [Object] },
     { title: 'Indoor Activities', option: [Object] } ],
  budget: '400',
  numTravelers: '3',
  date: '2016-10-01',
  origin:
   { latitude: 34.019292799999995,
     longitude: -118.49436989999998,
     address: '604 Arizona Ave, Santa Monica, CA 90401, USA',
     airport: '' } }
****************** */

  /*
  Things to add to req.body
  1) Country code: Ie. USA, MX, CN, FR
  */


// NEW RECEIVE CITY PROMISIED
function receiveCity(req, res) {
  // console.log('inside receiveCity req.body is : ', req.body);
  const promiseArray = [];
  var activity1 = req.body.answers[3].option.option
  var activity2 = req.body.answers[2].option.option

  // TRANSPORTATION
  // follow the same pattern below for insertion of Car, Airplane, and Train Models
  const first = _.first(req.body.answers);
  if (first.title === 'Transportation') {
    if (first.option.option === 'Car') {
      console.log('inside receivedCity we received Car');
    } else if (first.option.option === 'Airplane') {
      promiseArray.push(googleFlights.getFlights(req.body));
      console.log('inside receiveCity we receive Airplane');
    } else if (first.option.option === 'Train') {
      console.log('inside receiveCity we received Train');
    }
  }

  // LODGING
  const second = req.body.answers[1];
  if (second.title === 'Lodging') {
    if (second.option.option === 'Airbnb') {
      console.log('inside receivedCity we received Airbnb');
      promiseArray.push(airbnbModel.getListings(req.body));
    } else if (second.option.option === 'Hotel') {
      console.log('inside receivedCity we received Hotel');
      promiseArray.push(expediaHotelsModel.findHotels(req.body));
    } else if (second.option.option === 'Hostel') {
        console.log('inside receivedCity we received Hostel');
    }
  }

  const answers = req.body.answers.slice(2);
  const fourSquarePromises = answers.map((answer) => {
    return fourSquareModel.explore(req.body, answer.option.id);
  });
  const newPromiseArray = promiseArray.concat(fourSquarePromises) //.concat(fourSquarePromises);
  const selectedCategoriesArray = req.body.answers.map((answer) => {
    return {
      title: answer.title,
      id: answer.option.id,
      option: answer.option.option,
    };
  });


  Promise.all(newPromiseArray)
  .then((dataArray) => {
    const bundle = [];
    const fourSquareDataArray = dataArray.slice(2);
    bundle.push(fourSquareModel.parseFourSquareData(fourSquareDataArray, selectedCategoriesArray));
    console.log('bundle is: ', bundle)
    const bundles = createBundles.createBundles(dataArray[0], dataArray[1], bundle, req.body)


    res.status(200).send(bundles);
  })
  .catch((err) => {
    console.log('error inside receiveCity: ', err);
    res.status(500).end(err);
  });
}

exports.receive = {
  receiveCity,
};
