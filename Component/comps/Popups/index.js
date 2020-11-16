import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const MyPopUp = ({text, iconClose}) => {
  return (
    <View style={styles.container}>
   <Image source={iconClose} style={styles.headIconB}/>
   <View style={styles.textbox}>
      <Text style={styles.title}>It's Booked!</Text>
      <Text style={styles.titletext}>Please Check Your Booking At Notification</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 3,
    borderColor: "#2775C9",
    maxWidth: 335,
    maxHeight: 350,
    justifyContent: "center",
    marginVertical: 8,
    marginTop: 100,
    marginHorizontal: 50,
    padding: 20
  },

  title: {
    fontSize: 30,
    justifyContent: "center",
    alignItems:"center",
    // marginHorizental: 100,
    marginLeft: 50,
    marginBottom: 100,

  },
  textbox:{
    
    minHeight:100,
    marginBottom:50,

  },
  titletext:{
    fontSize: 20,
    
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center",
    marginLeft: 10,
  
  },
  headIconB:{
    position:"relative",
  marginLeft:220,
 marginBottom:60,
  // marginVertical:5,
  maxHeight:20,
  maxWidth:30,
  resizeMode:"contain"
}
});
MyPopUp.defaultProps = {
  iconClose:require("./close_big.png"),
  text: "Default",
};

export default MyPopUp;
