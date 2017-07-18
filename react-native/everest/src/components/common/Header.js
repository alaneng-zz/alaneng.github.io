import React from "react"
import { View } from "react-native"
import { Text } from "./Text"

class Header extends React.Component {
  render() {
    const { textStyle, containerStyle } = styles

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
  },
  textStyle: {
    fontSize: 28,
  },
}

export { Header }
