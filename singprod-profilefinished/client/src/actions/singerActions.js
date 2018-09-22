import axios from 'axios';

import {
  GET_SINGER,
  GET_SINGERS,
  SINGER_LOADING,
  CLEAR_CURRENT_SINGER,
  GET_ERRORS,
  SET_CURRENT_USER
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

// // Get singer by moniker
export const getSingerByMoniker = moniker => dispatch => {
  dispatch(setSingerLoading());
  axios
    .get(`/api/singer/moniker/${moniker}`)
    .then(res =>
      dispatch({
        type: GET_SINGER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SINGER,
        payload: null
      })
    );
};

// Create Singer
export const createSinger = (singerData, history) => dispatch => {
  axios
    .post('/api/singer', singerData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// // Add experience
// export const addExperience = (expData, history) => dispatch => {
//   axios
//     .post('/api/profile/experience', expData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Add education
// export const addEducation = (eduData, history) => dispatch => {
//   axios
//     .post('/api/profile/education', eduData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Experience
// export const deleteExperience = id => dispatch => {
//   axios
//     .delete(`/api/profile/experience/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Education
// export const deleteEducation = id => dispatch => {
//   axios
//     .delete(`/api/profile/education/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Get all singers
export const getSingers = () => dispatch => {
  dispatch(setSingerLoading());
  axios
    .get('/api/singer/all')
    .then(res =>
      dispatch({
        type: GET_SINGERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SINGERS,
        payload: null
      })
    );
};

// Delete account & singer
export const deleteSinger = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/singer')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
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