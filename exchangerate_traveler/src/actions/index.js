import axios from "axios";

export const FETCH_RATES = "FETCH_RATES";

export function fetchRates(date) {
  const baseUrl = `http://api.fixer.io/${date}?base=USD`;
  const request = axios.get(baseUrl);

  return {
    type: FETCH_RATES,
    payload: request,
    meta: { date } // https://github.com/acdlite/redux-promise/issues/28
  };
}
