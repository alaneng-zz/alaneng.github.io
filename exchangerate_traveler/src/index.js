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

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(
  createStore
);
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
