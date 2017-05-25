import { FETCH_RATES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RATES:
      // debugger;

      return [
        ...state,
        {
          date: action.meta["date"],
          rate: action.payload.data["rates"][action.meta["convertedCurrency"]]
        }
      ];
    default:
      return state;
  }
}
