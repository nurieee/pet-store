import { combineReducers } from "redux";
import auth from "./auth";
import pets from "./pets";
import shop from "./shop";


export default combineReducers({
    auth,
    pets,
    shop
});
