import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';


import LogoHeader from '../../comps/LogoHeader';
import Navigation from '../../comps/Navigation';
import MyTab from '../../comps/Tabs';
import Avatar from '../../comps/Avatar';
import UserTextInput from '../../comps/Inputs';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        position: "absolute",
        top: "15%",
        // alignItems: 'center',
    },
    
    logoheader:{
        top:"10%",

    },


    tabs:{
        alignItems:"flex-start",
    }, 
    Navi:{
        position:"absolute",
        top:698
    },

});

const Profile = () => {
    return (
        <View style={styles.container}>
           <LogoHeader
           style={styles.logoheader}
                logo={require("../../public/logo_h.png")}
            />
            <View style={styles.body}>
           
            <View style={styles.avatar}>
            <Avatar/>
            </View>
            <View style={styles.tabs}>
                <MyTab
                text="View Profile"
           
                />
                <MyTab
                 text="My discussion"
                />        
                <MyTab
                text="My Market"
                />
                <MyTab
                text="Settings"
                />
                <MyTab
                 text="Logout"
                />
                </View>
            
            </View>
            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default Profile;