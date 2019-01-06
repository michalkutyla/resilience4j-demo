import { combineReducers } from 'redux';
import DetailsReducer from './reducer_details';
import ReviewsReducer from './reducer_reviews';

const rootReducer = combineReducers({
  details: DetailsReducer,
  reviews: ReviewsReducer
});

export default rootReducer;
