import axios from "axios";
import { getDateRange } from "../helpers";

export const FETCH_RATES = "FETCH_RATES";
export const UPDATE_BASE_CURRENCY = "UPDATE_BASE_CURRENCY";
export const FETCH_DATE_RANGE = "FETCH_DATE_RANGE";

export function fetchRates(date, baseCurrency = "GBP") {
  const baseUrl = `http://api.fixer.io/${date}?base=${baseCurrency}`;
  const request = axios.get(baseUrl);

  return {
    type: FETCH_RATES,
    payload: request,
    meta: { date, baseCurrency } // https://github.com/acdlite/redux-promise/issues/28
  };
}

export function updateBaseCurrency(event, index, value) {
  console.log("currency:", value);

  return {
    type: UPDATE_BASE_CURRENCY,
    payload: value
  };
}

export function fetchDateRange() {
  const range = getDateRange(["2016-04-01", "2016-04-15"]);

  return {
    type: FETCH_DATE_RANGE,
    payload: range
  };
}
