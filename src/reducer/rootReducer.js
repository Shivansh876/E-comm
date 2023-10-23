import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import modeReducer from "../slices/modeSlice" 
const rootReducer = combineReducers({
    auth: authReducer,
    mode: modeReducer, 
})

export default rootReducer;