import { FETCH_RATES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RATES:
      return [
        ...state,
        {
          date: action.meta["date"],
          rate: action.payload.data["rates"][action.meta["baseCurrency"]]
        }
      ];
    default:
      return state;
  }
}
