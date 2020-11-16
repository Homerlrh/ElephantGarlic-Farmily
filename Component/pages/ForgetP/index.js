import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../comps/Button';
import UserTextInput from '../../comps/Inputs';

const styles = StyleSheet.create({
    forgetPpage:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    logoV:{
        width:180,
        height:80
    },
    forgetPinput:{
        marginBottom:30,
        paddingTop:"50%"
    },
    forgetPbutton:{
        width:212
    },
    forgetPback:{
        alignSelf:"center",
        color:"#2775C9",
        fontWeight:"bold",
        fontSize:15,
        marginTop:50
    }

});


const ForgetP = ()=>{
    return(
        <View style={styles.forgetPpage}>
            <Image source={require('./logoV.png')} style={styles.logoV} />

            <View style={styles.forgetPinput}>
                <UserTextInput placeholder="Username or Email Address" />
            </View>
            <View style={styles.forgetPbutton}>
                <Button bgcolor="#00AC64" text="COMFIRM"/>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgetPback}>BACK</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgetP;