import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
        }}
        style={styles.profilePic}
      />
      <Text style={styles.text}>Hello, [USERNAME]!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "18px",
    position: "relative"
  },

  text: {
    color: "#000000",
    fontSize: "20px",
    fontFamily: "Josefin Sans"
  },

  profilePic: {
    display: "flex",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    marginBottom: "30px"
  }
});

export default Avatar;
