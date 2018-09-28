import {
  GET_SINGER,
  GET_SINGERS,
  SINGER_LOADING,
  CLEAR_CURRENT_SINGER
} from '../actions/types';

const initialState = {
  singer: null,
  singers: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SINGER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SINGER:
      return {
        ...state,
        SINGER: action.payload,
        loading: false
      };
    case GET_SINGERS:
      return {
        ...state,
        SINGERS: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_SINGER:
      return {
        ...state,
        SINGER: null
      };
    default:
      return state;
  }
}
