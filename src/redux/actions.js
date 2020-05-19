import {
  START_FETCHING,
  SUCCESS_RESPONSE,
  ERROR_RESPONSE
} from './actionTypes.js';
import axios from 'axios'

export const startFetching = () => {
  return (dispatch) => {
    dispatch({type: START_FETCHING});
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        const data = response.data;
        dispatch({type: SUCCESS_RESPONSE, payload: data});
      }
    )
      .catch((error) => {
        console.log('error : ', error);
        dispatch({type: ERROR_RESPONSE});
      });
  }
};

// export const successResponse = (posts) => {
//   return {
//     type: SUCCESS_RESPONSE,
//     payload: posts
//   }
// };


// export const errorResponse = () => {
//   return {
//     type: ERROR_RESPONSE
//   }
// };

