import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header, Button, CardSection, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    isLoggedIn: null
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAnUA_MVV5EtitZ6k0FrT1lrTVaMHg9GdQ",
      authDomain: "react-native-auth-3abf1.firebaseapp.com",
      databaseURL: "https://react-native-auth-3abf1.firebaseio.com",
      projectId: "react-native-auth-3abf1",
      storageBucket: "react-native-auth-3abf1.appspot.com",
      messagingSenderId: "618217763477"
    });

    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ isLoggedIn: true })
        : this.setState({ isLoggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <CardSection><Spinner /></CardSection>
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
