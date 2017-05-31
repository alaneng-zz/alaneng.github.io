import { FETCH_RATES, CLEAR_RATES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case CLEAR_RATES:
      return [];
    case FETCH_RATES:
      // debugger;

      return [
        ...state,
        {
          rate: action.payload.data["rates"][action.meta["convertedCurrency"]],
          date: action.meta["date"],
          convertedCurrency: action.meta["convertedCurrency"]
        }
      ];
    default:
      return state;
  }
}
