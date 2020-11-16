import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    ShReviewCont:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginLeft:20
    },
    Shheart:{
        width:20,
        height:20
    },
    ShFavoriteNumber:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:3
    }
});

const ShHeart = ({ShFavNum}) => {
  return (
    <View style={styles.ShReviewCont}>
        <Image source={require('./heart.png')} style={styles.Shheart}/>
        <Text style={styles.ShFavoriteNumber}>{ShFavNum}</Text>
    </View>
  );
};

ShHeart.defaultProps = {
    ShFavNum:"20"
};

export default ShHeart;