import AppReducer from './reducers';
import { combineReducers } from 'redux'

export default combineReducers({ app: AppReducer })