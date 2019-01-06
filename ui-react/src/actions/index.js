import axios from 'axios';

export const FETCH_DETAILS = 'fetch_details';
export const FETCH_REVIEWS = 'fetch_reviews';

const GATEWAY_URL = 'http://localhost:8060/gateway';

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
