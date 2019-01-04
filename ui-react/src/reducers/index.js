import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import DetailsReducer from './reducer_details';
import ReviewsReducer from './reducer_reviews';

const rootReducer = combineReducers({
  details: DetailsReducer,
  reviews: ReviewsReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
