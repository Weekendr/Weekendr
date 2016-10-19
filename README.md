# Weekendr
A web application that curates travel bundles based on budget and preferences

You can see our live deployed application here: http://theweekendr.herokuapp.com/
Please note that transportation features are not yet available, and there is a bug in our trip rendering service. Please stand by as these features will be available shortly!

#### Tools Used:

* [React](https://facebook.github.io/react/)
* [React-Redux](https://github.com/reactjs/redux)
* [Webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [React-Router](https://github.com/rackt/react-router)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize](http://docs.sequelizejs.com/en/v3/)
* [Material-UI](http://www.material-ui.com/#/)


![alt text](https://github.com/Weekendr/Weekendr/blob/dev/client/assets/images/weekendr_wireframe.jpg)

File structure: 
```
.
├── README.md
├── client
│   ├── assets
│   │   ├── images
│   │   │   ├── Car.png
│   │   │   ├── airbnb.png
│   │   │   ├── airplane.png
│   │   │   ├── artsculture.png
│   │   │   ├── beach.png
│   │   │   ├── camping.png
│   │   │   ├── entertainment.png
│   │   │   ├── favicon.ico
│   │   │   ├── festival.png
│   │   │   ├── hiking.png
│   │   │   ├── hostel.png
│   │   │   ├── hotel.png
│   │   │   ├── museum.png
│   │   │   ├── musicvenue.png
│   │   │   ├── nightlife.png
│   │   │   ├── recreation.png
│   │   │   ├── train.png
│   │   │   └── weekendr_wireframe.jpg
│   │   └── styles
│   │       ├── main.css
│   │       └── main.scss
│   ├── build
│   │   └── bundle.js
│   ├── index.html
│   └── src
│       ├── actions
│       │   ├── actionTypes.js
│       │   ├── getLatLng.js
│       │   ├── index.js
│       │   ├── quizActions.js
│       │   ├── sendInputToState.js
│       │   └── tripActions.js
│       ├── components
│       │   ├── App.jsx
│       │   ├── BundleListItem.jsx
│       │   ├── BundleView.jsx
│       │   ├── CityListItem.jsx
│       │   ├── DestinationView.jsx
│       │   ├── Home.jsx
│       │   ├── NavBar.jsx
│       │   ├── Preferences.jsx
│       │   ├── QuizOption.jsx
│       │   ├── SidebarUserInput.jsx
│       │   ├── SidebarUserSelection.jsx
│       │   └── SubmitButton.jsx
│       ├── config
│       │   ├── example.googleConfig.js
│       │   └── googleConfig.js
│       ├── containers
│       │   ├── BundleList.jsx
│       │   ├── CityList.jsx
│       │   ├── Login.jsx
│       │   ├── Quiz.jsx
│       │   ├── Sidebar.jsx
│       │   ├── Signin.jsx
│       │   ├── Signup.jsx
│       │   ├── UserInput.jsx
│       │   └── UserProfile.jsx
│       ├── index.js
│       ├── reducers
│       │   ├── UserInputData.js
│       │   ├── index.js
│       │   ├── quizData.js
│       │   ├── reducer_ReceivedCities.js
│       │   ├── reducer_coordinates.js
│       │   ├── reducer_quiz.js
│       │   ├── reducer_selectedCity.js
│       │   ├── reducer_transport.js
│       │   ├── reducer_userInput.js
│       │   └── reducer_userProfile.js
│       └── routes.js
├── directory.txt
├── example.env
├── index.html
├── package.json
├── server
│   ├── controller
│   │   ├── airbnb.controller.js
│   │   ├── bundleCreator.js
│   │   ├── googleFlights.controller.js
│   │   ├── receive.controller.js
│   │   ├── search.controller.js
│   │   └── user.controller.js
│   ├── database.js
│   ├── model
│   │   ├── airbnb.model.js
│   │   ├── dataHandlers
│   │   │   ├── expediaHotelHandler.js
│   │   │   └── hotelHandler.js
│   │   ├── expediaHotels.model.js
│   │   ├── foursquare.model.js
│   │   ├── foursquareData
│   │   │   ├── categoryParser.js
│   │   │   ├── foursquareCategoryData.js
│   │   │   ├── foursquareCategoryJSON.js
│   │   │   └── handleFourSquareData.js
│   │   ├── foursquareDataHandler
│   │   │   ├── categoryFilter.js
│   │   │   └── foursquareDataParse.js
│   │   ├── googleFlights.model.js
│   │   ├── search.model.js
│   │   └── user.model.js
│   ├── router
│   │   ├── googleFlights.router.js
│   │   └── search.router.js
│   ├── routes.js
│   └── server.js
└── webpack.config.js
