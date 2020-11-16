import React from 'react';
import { View, Text, StyleSheet, Image, TextInput,ScrollView } from 'react-native';

// import MyPopUp from '../../comps/Popups';
import MyTab2 from '../../comps/Tab2';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';

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
        
            //  maxHeight:"100%"
    },
    Navi:{
        position:"absolute",
        top:698
    },
//     contentContainer: {
//         // alignItems: 'center',
//         position: "absolute",
//         top: "14%",
//         // alignItems: 'center',
//         // borderWidth:3,
//         // maxHeight:"100%"
    
// },

});

const Favorite = () => {
    return (
        
        <View style={styles.container}>
            <Header 
            
                text="Favorite"

                // iconRight={require('../../public/pencil.png')}
                bottomColor="#2775C9"
            />
  
            <View style={styles.body}>
            
                <MyTab2 
                text="Favorite Posts"
                />
                <MyTab2
                text="Favorite Items"
                />
                <MyTab2
                text="Favorite Slaughterhouses"
                />
    
            </View>
       
            <View style={styles.Navi}><Navigation /></View>
        </View>

    );
};


export default Favorite;