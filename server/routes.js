const userController = require('./controller/user.controller');
const receiveController = require('./controller/receive.controller');
const searchController = require('./controller/search.controller');
const airbnbController = require('./controller/airbnb.controller');

module.exports = (app, express) => {
  // user routes
  app.post('/api/createUser', userController.user.createUser);
  app.post('/api/signin', userController.user.authenticateUser);

  // receive routes
  app.post('/api/receive/receiveCity', receiveController.receive.receiveCity);

  // search routes
  app.post('/api/search/getCity', searchController.search.getCity);

  // airbnb routes
  app.get('api/airbnb/getListings', airbnbController.listings.get);
};
