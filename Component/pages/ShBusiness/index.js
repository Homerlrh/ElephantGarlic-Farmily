import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';


import Header from '../../comps/Header';
import ImageGallery from '../../comps/ImageGallery';
import ShBusinessComp from '../../comps/ShBusinessComp';
import InputTime from '../../comps/InputTime';
import Navigation from '../../comps/Navigation';
import Button from '../../comps/Button';
import InputDate from '../../comps/InputDate';


const styles = StyleSheet.create({
    ShBusinessPage:{
        marginTop:40,
        flex:1,
    },
    ShBusinImage:{
        marginTop:30,
        marginBottom:30
    },
    ShBusinTag:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:20
    },
    ShB_Descrip:{
        marginLeft:20,
        marginTop:20,
        marginRight:25,
        lineHeight:28
    },
    ShBusinessCom:{

    },
    ShB_time:{
        width:300,
        alignSelf:"center",
        marginTop:30
    },
    ShBCont: {
        position: "absolute",
        maxHeight:"50%",
        width:"100%",
        top:80
    },
    ShB_Navi:{
        position:"absolute",
        top:698
    },
    ShBusinessHead:{

    },
    ShBButton:{
        width:220,
        justifyContent:"center",
        alignSelf:"center",
        marginBottom:300
    },
    ShB_date:{
        width:300,
        alignSelf:"center",
        marginTop:30
    }
});

const ShBusiness = ({ShTag,ShDescrip}) =>{
    return(
        <View style={styles.ShBusinessPage}>
            <View style={styles.ShBusinessHead}>
                <Header text="Slaughterhouse" bottomColor="#2775C9"
                iconLeft={require('../../comps/Header/arrowleft.png')}
                iconRight={require('../../public/heart.png')}
                />
            </View>
                <ScrollView style={styles.ShBCont}>
                    <View style={styles.ShBusinessCom}><ShBusinessComp NameText="Mainland Meat"/></View>
                    <View style={styles.ShBusinImage}><ImageGallery /></View>
                    <Text style={styles.ShBusinTag}>{ShTag}</Text>
                    <Text style={styles.ShB_Descrip}>{ShDescrip}</Text>
                    <View style={styles.ShB_Map}></View>
                    <View>
                        <View style={styles.ShB_date}><InputDate /></View>
                        <View style={styles.ShB_time}><InputTime /></View>
                    </View>
                    <View style={styles.ShBButton}><Button text="BOOKING" bgcolor="#2775C9"  /></View>
                </ScrollView>


            <View style={styles.ShB_Navi}><Navigation /></View>
        </View>
    );
}


ShBusiness.defaultProps = {
    ShTag:"#Default",
    ShDescrip:"Default Slaughterhouse Business Descriptions"
};

export default ShBusiness;