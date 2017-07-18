import React from "react";
import { Text as NativeText } from "react-native";

const Text = props => {
  const textStyles = { ...styles.defaultTextStyles, ...props.style };
  return <NativeText style={textStyles}>{props.children}</NativeText>;
};

const styles = {
  defaultTextStyles: { fontFamily: "Cochin" }
};

export { Text };
