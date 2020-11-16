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
    margin: 10,
    color: "#000000",
    fontSize: 24
  }
});

const Underlined = ({ text, bottom, bottomWidth, onPress }) => {
  return (
    <View
      onPress={onPress}
      style={styles.outerBox} borderBottomColor={bottom} borderBottomWidth={bottomWidth}>
      <Text style={styles.underText}>{text}</Text>
    </View>
  );
};

Underlined.defaultProps = {
  text: "DEFAULT",
  bottom: "#FDB833",
  onPress: () => { }
};

export default Underlined;