import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ShHeart from "../ShHeart";
import ShReview from "../ShReview";
import ShUser from "../ShUser";

const styles = StyleSheet.create({
    ShBuisnessCont:{
      paddingTop:30,
      paddingLeft:20,
      paddingRight:30,
      paddingBottom:15,
      borderBottomColor:"#E5E5E5",
      borderBottomWidth: 1.5,
      backgroundColor:"#FFFFFF",
    },
    ShBusinName:{
      fontSize: 30,
      fontWeight:"bold",
      marginLeft:10,
      marginBottom:20
    },
    ShBusinBox:{
      display:"flex",
      flexDirection:"row",
    },
    ShBusinBoxStar:{
      display:"flex",
      flexDirection:"row",
      position: "relative",
      left: "30%"
    },
    ShBusinBoxHeart:{
      display:"flex",
      flexDirection:"row",
      position: "relative",
      left: "30%"
    }

});

const ShBusinessComp = ({NameText}) => {
  return (
    <View style={styles.ShBuisnessCont}>
        <Text style={styles.ShBusinName}>{NameText}</Text>
        <View style={styles.ShBusinBox}>
          <ShUser/>
          <View style={styles.ShBusinBoxStar}><ShReview /></View>
          <View style={styles.ShBusinBoxHeart}><ShHeart /></View>
        </View>
    </View>
  );
};

ShBusinessComp.defaultProps = {
  NameText:"Business Name"
};

export default ShBusinessComp;