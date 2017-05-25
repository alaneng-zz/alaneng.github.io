import { combineReducers } from "redux";
import FetchRatesReducer from "./reducer_fetch_rates";
import BaseCurrencyReducer from "./reducer_base_currency";
import ConvertedCurrencyReducer from "./reducer_converted_currency";
import DateRangeReducer from "./reducer_date_range";

const reducers = combineReducers({
  rates: FetchRatesReducer,
  baseCurrency: BaseCurrencyReducer,
  convertedCurrency: ConvertedCurrencyReducer,
  dateRange: DateRangeReducer
});

export default reducers;
