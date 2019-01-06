import _ from 'lodash';
import { FETCH_DETAILS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DETAILS:
      console.log('Fetch details');
      console.log(action);
      const details = {};
      console.log(action.error);
      if (action.error) {
        console.log('here');
        details['error'] = action.payload.response.data.message;
      } else {
        details['details'] = action.payload.data;
      }

      const newstate = { ...state, details: details };
      console.log(newstate);
      return newstate;
    default:
      return state;
  }
}
