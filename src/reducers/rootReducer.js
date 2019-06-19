import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import person from './dataReducer';

export default combineReducers({
    simpleReducer,
    person,
});
