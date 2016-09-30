import { AIRBNB_LISTINGS } from '../actions/actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case AIRBNB_LISTINGS:
      return {
        ...state,
        listings: action.payload.data.search_results
      };
    default:
      return state;
  }
}
