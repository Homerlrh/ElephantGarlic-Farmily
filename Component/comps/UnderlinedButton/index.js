import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerBox: {
    borderBottomWidth: 3,
    alignItems: "center",
    margin: 20,
    minWidth: 100
  },
  underText: {
    fontWeight: "bold",
    mzrgin: 10,
    color: "#000000",
    fontSize: 24
  }
});

const UnderlinedButton = ({ text, bottom }) => {
  return (
    <View style={styles.outerBox} borderBottomColor={bottom}>
      <Text style={styles.underText}>{text}</Text>
    </View>
  );
};

UnderlinedButton.defaultProps = {
  text: "DEFAULT",
  bottom: "#FDB833"
};

export default UnderlinedButton;