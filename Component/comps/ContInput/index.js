import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

const ContInput = ({text, placeholder}) => {
  const [value, onChangeText] = React.useState({text});

  return (
   
    <TextInput
      style={{
        height: 333,
        width: 333,
        borderColor: "#DADADA",
        borderWidth: 1,
        padding:10
      }}
      onChangeText={(text) => onChangeText(text)}

      value={value}
      placeholder={placeholder}
      placeholderTextColor="#000000"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#797",
    flex:1,
  }
});
ContInput.defaultProps = {
  text: "yes",
  placeholder:"placeholder"
};
export default ContInput;
