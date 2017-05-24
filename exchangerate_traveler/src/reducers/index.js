import { combineReducers } from "redux";
import RatesReducer from "./reducer_rates";
import BaseCurrencyReducer from "./reducer_base_currency";
import DateRangeReducer from "./reducer_date_range";

const reducers = combineReducers({
  rates: RatesReducer,
  baseCurrency: BaseCurrencyReducer,
  dateRange: DateRangeReducer
});

export default reducers;
