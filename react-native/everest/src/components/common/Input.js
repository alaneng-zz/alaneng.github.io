import React from "react";
import { TextInput, Text, View } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  autoFocus
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autocorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoFocus={autoFocus}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  }
};

export { Input };
