
import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,TouchableHightlightImage,TouchableHighlight } from "react-native";

const MyUnread = ({title,text}) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  return (
    <View style={styles.container}>
      
      {/* <Text style={styles.title}>{title}</Text>
      <Text style={styles.titletext}>
      {text}
      </Text> */}
      {/* <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View> */}

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.3}
        underlayColor="#FFFFF"
      >
       <Text style={styles.title}>{title}</Text>
      <Text style={styles.titletext}>
      {text}
      </Text>
  
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C97064",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
    width: 380,
    height: 100,
    justifyContent: "center",
    marginVertical: 8,
    // marginTop: 100,
    marginHorizontal: 50,
    // padding: 20,
  
    // backgroundColor:'transparent',
    // opacity: 0.6,
    
   
  },
  title: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
    marginLeft: 30
  },
  titletext: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 15
  },
  button:{
      //  backgroundColor:'transparent',
    opacity:1
  }
  
});
MyUnread.defaultProps = {
  text: "Default text",
  title: "Default",
};
export default MyUnread;
