import {combineReducers} from 'redux';
import reducer from './reducer';
import reducer1 from './reducer1';

let combineReducerResponse = combineReducers({reducer:reducer,reducer1:reducer1});

export default combineReducerResponse;