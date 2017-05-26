import axios from "axios";

export const FETCH_RATES = "FETCH_RATES";
export const UPDATE_BASE_CURRENCY = "UPDATE_BASE_CURRENCY";
export const UPDATE_CONVERTED_CURRENCY = "UPDATE_CONVERTED_CURRENCY";
export const FETCH_DATE_RANGE = "FETCH_DATE_RANGE";

export function fetchRates(date, baseCurrency) {
  const baseUrl = `http://api.fixer.io/${date}?base=${baseCurrency}`;
  const request = axios.get(baseUrl);

  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_RATES,
        payload: request,
        meta: { date, convertedCurrency: "GBP" } // https://github.com/acdlite/redux-promise/issues/28
      });
    });
  };

  // return {
  //   type: FETCH_RATES,
  //   payload: request,
  //   meta: { date, convertedCurrency: "GBP" } // https://github.com/acdlite/redux-promise/issues/28
  // };
}

export function updateBaseCurrency(event, index, value) {
  return {
    type: UPDATE_BASE_CURRENCY,
    payload: value
  };
}

export function updateConvertedCurrency(event, index, value) {
  return {
    type: UPDATE_CONVERTED_CURRENCY,
    payload: value
  };
}

export function fetchDateRange() {
  return {
    type: FETCH_DATE_RANGE
  };
}
