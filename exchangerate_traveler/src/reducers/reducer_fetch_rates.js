import { FETCH_RATES, CLEAR_RATES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case CLEAR_RATES:
      return [];
    case FETCH_RATES:
      const rateObj = {
        rate: action.payload.data["rates"][action.meta["convertedCurrency"]],
        date: action.meta["date"],
        baseCurrency: action.meta["baseCurrency"],
        convertedCurrency: action.meta["convertedCurrency"]
      };

      return [...state, rateObj];
    default:
      return state;
  }
}
