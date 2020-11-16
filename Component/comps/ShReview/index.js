import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    ShReviewCont:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    ShStar:{
        width:20,
        height:20
    },
    ShReviewNumber:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:3
    }
});

const ShReview = ({ShreviewNum}) => {
  return (
    <View style={styles.ShReviewCont}>
        <Image source={require('./star.png')} style={styles.ShStar}/>
        <Text style={styles.ShReviewNumber}>{ShreviewNum}</Text>
    </View>
  );
};

ShReview.defaultProps = {
    ShreviewNum:"5.0"
};

export default ShReview;