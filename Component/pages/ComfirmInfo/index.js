import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import MyComfirm from '../../comps/Comfirm';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Button from '../../comps/Button'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        position: "absolute",
        top: "10%",
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        // alignItems: "center"
        justifyContent: "center"
    },
    button:{

    },
    Navi:{
        position:"absolute",
        top:698
    },
    // icon: {
    //     // resizeMode: "contain",
    //     // maxWidth: 25,
    //     // maxHeight: 25,
    //     // margin: 10,
    //     display:"none",
    // }
});

const ComfirmInfo = () => {
    return (
        <View style={styles.container}>
            <Header 
                text="Slaugterhouse"

                // iconRight={require('../../public/pencil.png')}
                bottomColor="#2775C9"
            />
            <View style={styles.body}>
                {/* this input is for testing pages only -- start */}
                {/* <View style={styles.row}> */}
                
                <MyComfirm>
                </MyComfirm>
                <View style={styles.button}>
                <Button/>
                </View>
                {/* </View> */}
                {/* this input is for testing pages only -- end */}
                 

                
                {/* <ForumPost
                    imagePath={require('../../public/sh4.png')}
                    txt1="One more time"
                    txt2="We gonna celebrate"
                /> */}
            </View>
            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};
Button.defaultProps= {
    bgcolor: "#2775C9",
  text: "Comfirm"
  
}
Header.defaultProps = {
    // text: "Default text",
    // title: "Default",
   
    // iconRight:require("none"),
  };
export default ComfirmInfo;