import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Gallery = () => {
  return (
    <View style={styles.container}>
      {/* Will use a react native open source image gallery here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    padding: "18px"
  }

  // arrowLeft: {
  //   width: "30px",
  //   height: "30px"
  // },

  // arrowRight: {
  //   width: "30px",
  //   height: "30px"
  // }
});

export default Gallery;
