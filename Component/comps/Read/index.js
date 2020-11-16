
import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";

const Read = ({title,text}) => {
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 3,
    borderColor: "#DADADA",
    width: 380,
    height: 100,
    justifyContent: "center",
    marginVertical: 8,
    // marginTop: 100,
    marginHorizontal: 50,
    // padding: 20,
    opacity: 2,
   
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
  }
});
Read.defaultProps = {
  text: "Default text",
  title: "Default",
};
export default Read;
