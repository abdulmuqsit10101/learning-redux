import {
  START_FETCHING,
  SUCCESS_RESPONSE,
  ERROR_RESPONSE
} from '../actionTypes.js';

const initialState = {
  posts: [],
  loading: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {...state, loading: true};
    case SUCCESS_RESPONSE:
      return {...state, loading: false, posts: action.payload};
    case ERROR_RESPONSE:
      return {...state, loading: false, error: true};
    default:
      return {...state};
  }
}
