import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import data from './dataReducer';
import indexes from './indexesReducer';
import search from './searchReducer';

export default combineReducers({
    simpleReducer,
    data,
    indexes,
    search,
});
