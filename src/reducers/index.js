import storeReducer from "./store";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    storeDetails: storeReducer
})

export default allReducers;