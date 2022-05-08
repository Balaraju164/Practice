import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countChange } from './reducers/countChange';

const reducer = combineReducers({
  count: countChange,
});

const initialstate = {};

//const middleware=[thunk]

const store = configureStore(
  { reducer },
  initialstate,
  composeWithDevTools(applyMiddleware())
);

export default store;
