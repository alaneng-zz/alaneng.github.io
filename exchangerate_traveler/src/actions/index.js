import axios from "axios";
import { getDateRange } from "../helpers";

export const FETCH_RATES = "FETCH_RATES";
export const UPDATE_BASE_CURRENCY = "UPDATE_BASE_CURRENCY";
export const UPDATE_CONVERTED_CURRENCY = "UPDATE_CONVERTED_CURRENCY";
export const FETCH_DATE_RANGE = "FETCH_DATE_RANGE";

export function fetchRates(date, baseCurrency = "USD") {
  const baseUrl = `http://api.fixer.io/${date}?base=${baseCurrency}`;
  const request = axios.get(baseUrl);

  return {
    type: FETCH_RATES,
    payload: request,
    meta: { date, convertedCurrency: "CAD" } // https://github.com/acdlite/redux-promise/issues/28
  };
}

export function updateBaseCurrency(event, index, value) {
  console.log("base currency:", value);

  return {
    type: UPDATE_BASE_CURRENCY,
    payload: value
  };
}

export function updateConvertedCurrency(event, index, value) {
  console.log("converted currency:", value);

  return {
    type: UPDATE_CONVERTED_CURRENCY,
    payload: value
  };
}

export function fetchDateRange() {
  // use hardcoded date ranges for now
  const range = getDateRange(["2016-04-01", "2016-04-02"]);

  return {
    type: FETCH_DATE_RANGE,
    payload: range
  };
}
