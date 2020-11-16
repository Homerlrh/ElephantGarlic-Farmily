import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    headerBox:{
        position: "absolute",
        top: "0%",
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:1.5,
        minWidth: "100%",
        maxHeight: "25%",
        alignItems:"center",
        justifyContent:"center",
    },
    logo:{
        resizeMode:"contain",
        maxWidth:"65%",
        bottom: "-15%"
    }
});

const LogoHeader = ({logo}) => {
  return (
    <View style={styles.headerBox}>
        <Image source={logo} style={styles.logo} />
    </View>
  );
};

LogoHeader.defaultProps = {

};

export default LogoHeader;