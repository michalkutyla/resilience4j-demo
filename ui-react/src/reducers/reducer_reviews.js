import _ from 'lodash';
import { FETCH_REVIEWS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      console.log('Fetch reviews');
      console.log(action);
      const reviews = {};
      console.log(action.error);
      if (action.error) {
        console.log('here');
        reviews['error'] = action.payload.response.data.message;
      } else {
        reviews['reviews'] = action.payload.data;
      }

      const newstate = { ...state, reviews: reviews };
      console.log(newstate);
      return newstate;
    default:
      return state;
  }
}
