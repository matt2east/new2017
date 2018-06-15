import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//works because the file is called index.js

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware()(...middleWare))
//add middleware array

export default store;