import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import data from './dataReducer';
import indexes from './indexesReducer';

export default combineReducers({
    simpleReducer,
    data,
    indexes,
});
