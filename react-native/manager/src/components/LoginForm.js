import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";

import { Card, CardSection, Header, Button, Input, Spinner } from "./common";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={text => this.onEmailChange(text)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={text => this.onPasswordChange(text)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>{this.props.error}</Text>

          <CardSection>
            {this.props.isSpinning
              ? <Spinner size="large" />
              : <Button onPress={() => this.onButtonPress()}>Login</Button>}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
};

const mapStateToProps = ({ auth: { email, password, error, isSpinning } }) => {
  return {
    email,
    password,
    error,
    isSpinning
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
