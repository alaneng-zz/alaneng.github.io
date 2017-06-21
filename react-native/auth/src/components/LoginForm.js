import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";

import { Button, CardSection, Card, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    isAuthenticating: false
  };

  onLoginSuccess() {
    this.setState({
      error: "",
      isAuthenticating: false,
      email: "",
      password: ""
    });
  }

  onLoginFail() {
    this.setState({
      error: "You dun f'ed up bro",
      isAuthenticating: false
    });
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", isAuthenticating: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFail());
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.state.email}
            label="Email"
            onChangeText={email => this.setState({ email })}
            autoFocus
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            label="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.state.isAuthenticating
            ? <Spinner />
            : <Button onPress={() => this.onButtonPress()}>Log in</Button>}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "tomato"
  }
};

export default LoginForm;
