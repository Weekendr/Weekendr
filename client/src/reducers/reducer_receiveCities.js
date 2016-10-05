import { RECEIVED_DATA } from '../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case RECEIVED_DATA:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
}
