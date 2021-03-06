import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

export default combineReducers({
    // On the left is the state key to data in Redux store that is 
    // going to be updated by the function on the right
    posts: postReducer,
    users: userReducer
});