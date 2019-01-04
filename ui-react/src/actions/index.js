import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_DETAILS = 'fetch_details';
export const FETCH_REVIEWS = 'fetch_reviews';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_posts';
export const DELETE_POST = 'delete_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const GATEWAY_URL = 'http://localhost:8060/gateway';
const API_KEY = '?key=michalyourfan';

export function fetchProductDetails() {
  const request = axios.get(`${GATEWAY_URL}/details`);

  return {
    type: FETCH_DETAILS,
    payload: request
  };
}

export function fetchReviews() {
  const request = axios.get(`${GATEWAY_URL}/reviews`);

  return {
    type: FETCH_REVIEWS,
    payload: request
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id //we don't need a post itself anymore
  };
}
