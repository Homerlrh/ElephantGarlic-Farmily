import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const InputTime = () => {
  const [expanded, setExpanded] = useState(false);
  const onPress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.label}>
          <Image
            source={{ uri: "../../../TimeIcon.svg" }}
            style={styles.timeIcon}
          />
          <Text style={styles.text}>Time</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{ uri: "../../../SimpleArrowDown.svg" }}
            style={styles.arrow}
            onPress={() => {
              setExpanded(!expanded);
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.hourContainer} expanded={expanded}>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    marginBottom: "40px",
    display: "flex",
    alignItems: "center"
  },

  timeContainer: {
    backgroundColor: "#FFFFFF",
    // display:"${props=>props.expanded ? "inline-flex" : "none"}",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // border:${props=>props.expanded ? "#2775C9" : "#D3D3D3"},
    border: "solid 3px #D3D3D3",
    borderRadius: "5px",
    padding: "5px",
    position: "relative",
    marginBottom: "10px"
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: "16px",
    fontFamily: "Roboto",
    padding: "5px"
  },

  timeIcon: {
    width: "20px",
    height: "20px",
    margin: "5px"
  },

  arrow: {
    width: "30px",
    height: "30px"
  },

  hourContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContents: "center",
    alignItems: "center",
    width: "95%",
    // border: "solid 3px #D3D3D3",
    borderRadius: "5px",
    boxShadow: "3px 3px 12px #D3D3D3"
  },

  time: {
    color: "#000000",
    fontWeight: "600",
    fontSize: "16px",
    fontFamily: "Roboto",
    margin: "12px"
  },

  timeBlock: {
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 2,
    width: "100%"
  }
});

export default InputTime;
