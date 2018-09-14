import axios from 'axios';

import {
  GET_SINGER,
  // GET_SINGERS,
  SINGER_LOADING,
  CLEAR_CURRENT_SINGER,
  GET_ERRORS
  // SET_CURRENT_USER
} from './types';

// Get current singer
export const getCurrentSinger = () => dispatch => {
  dispatch(setSingerLoading());
  axios
    .get('/api/singer')
    .then(res =>
      dispatch({
        type: GET_SINGER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SINGER,
        payload: {}
      })
    );
};

// Singer loading
export const setSingerLoading = () => {
  return {
    type: SINGER_LOADING
  };
};

// Clear singer
export const clearCurrentSinger = () => {
  return {
    type: CLEAR_CURRENT_SINGER
  };
};