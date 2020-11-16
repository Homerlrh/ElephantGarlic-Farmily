import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Avatar = ({username}) => {
  return (
    <View style={styles.container}>
      <Image //Will use Expo ImagePicker API here instead, just need guidance for this part...
        source={{
          uri:
            "https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
        }}
        style={styles.profilePic}
      />
      <Text style={styles.text}>Hello, {username}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    position: "relative"
  },

  text: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400"
  },

  profilePic: {
    display: "flex",
    borderRadius: 120,
    width: 100,
    height: 100,
    marginBottom: 30
  }
});

Avatar.defaultProps = {
  username:"[USERNAME]",
  // img:profilePic
}

export default Avatar;
