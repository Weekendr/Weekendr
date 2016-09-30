import { combineReducers } from 'redux';
import quizReducer from './reducer_quiz';
import userProfileReducer from './reducer_userProfile';
import userInputReducer from './reducer_userInput';
import coordinatesReducer from './reducer_coordinates';
import receivedCitiesReducer from './reducer_receivedCities';
import airbnbReducer from './reducer_airbnb';

const rootReducer = combineReducers({
  quiz: quizReducer,
  user: userProfileReducer,
  userInput: userInputReducer,
  coordinates: coordinatesReducer,
  receivedCities: receivedCitiesReducer,
  airbnb: airbnbReducer
});

export default rootReducer;
