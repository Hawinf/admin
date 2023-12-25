import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import carReducers from "./carReducer";

const rootReducer = combineReducers({
    loginReducer, registerReducer, carReducers
})

export default rootReducer;