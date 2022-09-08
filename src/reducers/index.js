import { combineReducers } from "redux";

//This is just a boilerplate code for combining all the reducers if there are multiple reducers

import posts from './posts'
export default combineReducers({
       posts: posts,
    });