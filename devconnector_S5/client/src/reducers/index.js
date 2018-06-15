import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

export default combineReducers({
  auth: authReducer
  //use this.props.auth
});