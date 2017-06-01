import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import promise from "redux-promise";
import reducers from "./reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import reduxThunk from "redux-thunk";
import { getDateRange } from "./helpers";

// const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(
//   createStore
// );

const initialState = {
  dateRange: getDateRange(["2017-05-01", "2017-05-30"]),
  baseCurrency: "USD",
  convertedCurrency: ["AUD", "CAD", "EUR", "GBP", "DKK", "JPY", "MXN"]
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(promise, reduxThunk)
);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
