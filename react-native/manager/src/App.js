import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCZu1cJyVUoHoG2P-QpKt_ip5GTTPT0TNI",
      authDomain: "react-native-manager-a7b52.firebaseapp.com",
      databaseURL: "https://react-native-manager-a7b52.firebaseio.com",
      projectId: "react-native-manager-a7b52",
      storageBucket: "",
      messagingSenderId: "274367224898"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // {} is initial state

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
