import React, { Component } from "react"
import { connect } from "react-redux"
import { View, TouchableHighlight } from "react-native"
import { Text, Button } from "./common"

import Icon from "react-native-vector-icons/FontAwesome"
import { logInUser } from "../actions"

class LoginForm extends Component {
  render() {
    const leafIcon = <Icon name="leaf" size={160} color="#917C21" />

    return (
      <TouchableHighlight onPress={() => this.props.logInUser()}>
        <View style={styles.loginStyles}>
          <Text>
            {leafIcon}
          </Text>
          <Text style={{ fontSize: 48 }}>Log In</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = {
  loginStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#D4C99C",
  },
}

export default connect(null, { logInUser })(LoginForm)
