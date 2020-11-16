import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MyComfirm = ({iconLeft,text, iconCalendar, iconWatch, titletext,titletext2, bigTitle}) => {
  return (
    <View style={styles.container}>
      <Image source={iconLeft} style={styles.headIconL}/>
      <View style={styles.titlebox1}>
      <Text style={styles.title}>{bigTitle}</Text>
      <Text style={styles.title2}>Address{text}</Text>
      </View>
      <View style={styles.timeBox}>
      <Image source={iconCalendar} style={styles.headIconC}/>
      <Text style={styles.titletext}>{titletext}</Text>
      </View>
      <View style={styles.clockBox}>
      <Image source={iconWatch} style={styles.headIconW}/>
      <Text style={styles.titletext2}>{titletext2}</Text>
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
    width: 335,
    height: 350,
    justifyContent: "center",
    marginVertical: 8,
    marginTop: 100,
    marginHorizontal: 50,
    // dropShadow: 5.
    // padding: 20
  },
  
  
  title: {
    fontFamily:"Josefin Sans",
    justifyContent: "center",
    alignItems:"center",
    marginBottom:10,
    fontSize: 30,
    marginLeft: 55, 
    fontWeight:"bold",
  },
  timeBox:{
    // display:"flex",
    flexDirection:"row",

    justifyContent:"center",
    // marginVertical:50,
    // flex:0.5,
  },
  title2: {
    fontSize: 25,
    justifyContent: "center",
    alignItems:"center",
    // marginLeft: 60,
    marginBottom:10,
    marginHorizontal:110, 
    fontWeight:"bold",
    fontFamily:"Josefin Sans",
    // marginVertical:20,


  },
  
  titletext:{

    fontSize: 20,
    fontWeight:"bold",
    // justifyContent: "center",
    // alignItems:"center",
    // textAlign:"text-align",
    // marginRight: 70,
  
  },
  titletext2:{

    fontSize: 20,
    fontFamily:"Josefin Sans",
    fontWeight:"bold",
    // justifyContent: "center",
    // alignItems:"center",
    // textAlign:"text-align",
    // marginRight: 70,
  
  },
  headIconL:{
    // position:"relative",
    left:290,
    bottom: 60,
    // marginBottom:100,
    // alignItems:"right",
    maxHeight:20,
    maxWidth:35,
    resizeMode:"contain"

},
headIconC:{
    // left:30,
    // marginBottom:100,
    // alignItems:"right",
    maxHeight:30,
    maxWidth:35,
    marginRight:20,
    // resizeMode:"contain"
},

headIconW:{
  maxWidth:35,
  maxHeight:35,
  
  // alignItems:"right",
  // height:10,
  // width:35,
  marginRight:20,
},
clockBox:{
  flexDirection:"row",
  justifyContent:"center",
}

});
MyComfirm.defaultProps = {
  bigTitle:"Business Name",
  iconLeft:require("./close_big.png"),
titletext:"2020/09/10AM",
titletext2:"2020/09/10AM",
iconCalendar:require("./calendar_check.png"),
iconWatch:require("./stopwatch.png"),
 
};
export default MyComfirm;
