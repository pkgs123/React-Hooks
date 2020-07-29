import {createStore} from 'redux';
import combineReducer from './Reducers/combineReducer';

let storeResult = createStore(combineReducer);