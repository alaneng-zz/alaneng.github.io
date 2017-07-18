import React, { Component } from "react"
import { connect } from "react-redux"
import { View, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { LinearGradient } from "expo"

import { Text, Button } from "./common"
import { logInUser } from "../actions"

class LoginForm extends Component {
  render() {
    const leafIcon = <Icon name="leaf" size={160} color="#917C21" />

    return (
      <LinearGradient colors={["#D4C99C", "#C6B566", "#BFAB4B"]}>
        <TouchableWithoutFeedback onPress={() => this.props.logInUser()}>
          <View style={styles.loginStyles}>
            <Text>
              {leafIcon}
            </Text>
            <Text style={{ fontSize: 48 }}>Log In</Text>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    )
  }
}

const styles = {
  loginStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "transparent",
  },
}

export default connect(null, { logInUser })(LoginForm)
