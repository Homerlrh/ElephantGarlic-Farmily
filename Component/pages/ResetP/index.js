import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../comps/Button';
import UserTextInput from '../../comps/Inputs';

const styles = StyleSheet.create({
    resetPpage:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    logoV:{
        width:180,
        height:80
    },
    resetPtext:{
        alignSelf:"center",
        color:"#2775C9",
        fontWeight:"bold",
        fontSize:12,
        marginTop:30,
        marginBottom:15,
        alignSelf:"flex-start"
    },
    resetPinput:{
        marginBottom:25
    },
    resetPbutton:{
        width:212
    },
    resetPcont:{
        marginTop:"40%"
    }

});


const ResetP = ()=>{
    return(
        <View style={styles.resetPpage}>
            <Image source={require('./logoV.png')} style={styles.logoV} />

            <View style={styles.resetPcont}>
                <Text style={styles.resetPtext}>Reset your password</Text>
                <View style={styles.resetPinput}>
                    <UserTextInput placeholder="New Password" />
                </View>
                <Text style={styles.resetPtext}>Comfirm your password</Text>
                <View style={styles.resetPinput}>
                    <UserTextInput placeholder="Comfirm your password" />
                </View>
            </View>

            <View style={styles.resetPbutton}>
                <Button bgcolor="#00AC64" text="LOGIN"/>
            </View>

        </View>
    );
};

export default ResetP;