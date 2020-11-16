
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const MyTab = ({iconView, text}) => {
  const [bordercolor, setBdColor] = useState("#DADADA");

    // const subject = { fontSize: fontsize ? fontsize : 22 };
    const bcolor = { borderColor: bordercolor ? bordercolor : "#DADADA" };
  return (
    <View style={[styles.container, bcolor]}
        onTouchStart={() => { setBdColor("#C97064"); }}
        onTouchEnd={() => { setBdColor("#DADADA"); }}
    >
      <View style={styles.cont}>
      <Text style={styles.title}>{text}</Text>
      
      <Image source={iconView} style={styles.headIconV}/>
  
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    
    // maxWidth: "100%",
    // maxHeight: 75,
    // justifyContent: "center",
    // // marginVertical: 8,
    // // marginTop: 100,
    // marginHorizontal: 40,
    // padding: 13,
    // display:"flex",
    // flexDirection:"row",
    // alignContent:"space-between"
  },
  cont:{
    maxWidth: "90%",
    maxHeight: 75,
    justifyContent: "center",
    // marginVertical: 8,
    // marginTop: 100,
    marginHorizontal: 40,
    padding: 13,
    display:"flex",
    flexDirection:"row",
    alignContent:"space-between",
    alignItems: "flex-start",
    justifyContent:"flex-start",
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: 25,
    // justifyContent: "center",
    alignItems: "flex-start",
    justifyContent:"flex-start",
    marginHorizontal: 100,
    marginLeft: 10,
    fontWeight:"bold"

  },
  headIconV: {
    position:"relative",
    left:15,
    marginVertical:12,
    maxHeight:20,
    maxWidth:20,
    resizeMode:"contain"
  },
  img:{
    // alignItems: "flex-end",
    // justifyContent:"flex-end",

  }
});
MyTab.defaultProps = {
  iconView:require("./iconfinder_right.png"),
  text: "Default",
};
export default MyTab;
