import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerline:{
        borderRadius:10,
        borderWidth:3,
        borderColor:"#DADADA",
        alignItems: "center",
        minHeight:80,
        justifyContent:"center"
    },
    insidetext:{
        color:"#000000",
        width: 51,
        fontWeight: "bold",
        textAlign:"center",
        margin:10
    }
});

const Outlined = ({text}) => {

    const [border, setBorColor] = useState(true);

    const outline = {borderColor:border?"#DADADA":"#2775C9"}

  return (
    <View style={[styles.outerline, outline]}
        onTouchStart={()=>{setBorColor(!border)}}
    >
        <View>
  <Text style={styles.insidetext}>{text}</Text>
        </View>
    </View>
  );
};

Outlined.defaultProps = {
    text:"Default"
};

export default Outlined;