import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import data from './dataReducer';

export default combineReducers({
    simpleReducer,
    data,
});
