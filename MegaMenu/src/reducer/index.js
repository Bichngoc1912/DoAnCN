import {combineReducers} from 'redux';
import category from './category';
import posts from './post'
export default combineReducers({
    category,
    posts
})