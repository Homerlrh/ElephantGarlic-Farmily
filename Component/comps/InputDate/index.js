import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const InputDate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.label}>
          <Image
            source={{ uri: "../../../DateIcon.svg" }}
            style={styles.dateIcon}
          />
          <Text style={styles.text}>Date</Text>
        </View>
        <Image
          source={{ uri: "../../../SimpleArrowDown.svg" }}
          style={styles.arrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    marginBottom: "40px"
  },

  dateContainer: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "solid 3px #D3D3D3",
    borderRadius: "5px",
    padding: "5px",
    position: "relative"
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: "16px",
    fontFamily: "Roboto",
    padding: "5px"
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  dateIcon: {
    width: "20px",
    height: "20px",
    margin: "5px"
  },

  arrow: {
    width: "30px",
    height: "30px"
  },

  calendarContainer: {}
});

export default InputDate;
