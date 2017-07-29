import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import firebase from "firebase"

import reducers from "./reducers"
import "semantic-ui-css/semantic.min.css"

class InitialApp extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB_mCV5lPZWCtrKGaOLz_frsfsIAI9NUUY",
      authDomain: "grocery-a5858.firebaseapp.com",
      databaseURL: "https://grocery-a5858.firebaseio.com",
      projectId: "grocery-a5858",
      storageBucket: "grocery-a5858.appspot.com",
      messagingSenderId: "903031015454",
    }
    firebase.initializeApp(config)
  }

  render() {
    return <App />
  }
}

ReactDOM.render(
  <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <InitialApp />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
