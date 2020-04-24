import { combineReducers } from "redux";
import courseReducer from "./courseReducer"
import userReducer from "./userReducer"

export default combineReducers({
    courses: courseReducer,
    users: userReducer
    // course: 
})