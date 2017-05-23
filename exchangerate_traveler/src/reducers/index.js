import { combineReducers } from "redux";
import RatesReducer from "./reducer_rates";

const reducers = combineReducers({
  rates: RatesReducer
});

export default reducers;
