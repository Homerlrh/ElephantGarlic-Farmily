import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';


import InputDate from '../../comps/InputDate';
import InputLocation from '../../comps/InputLocation';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Outlined from '../../comps/Outlined';
import Button from '../../comps/Button';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    scroll: {
        position: "absolute",
        maxHeight:"100%",
        width:"100%",
        marginTop: 120
    },
    button: {
        width:100,
        justifyContent: "center",
        alignSelf: "center"
    },
    Navi:{
        position:"absolute",
        top:698
    },
    filterOption: {
        margin:20,
        width:100
    },
    inputD: {
        width: 300,
        alignSelf: "center",
        marginBottom: 10
    },
    inputL: {
        width: 300,
        alignSelf: "center"
    },
    optionCont: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "center"
    },
    fourOptionsCont: {
        marginTop: 10,
        marginBottom: 20
    }
});

const ShFilter = () => {
    return (
        <View style={styles.container}>
            <View>
            <Header
                text="Slaughterhouse"
                bottomColor="#2775C9"
            />
            </View>
            <View style={{}}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.inputL}><InputLocation /></View>
                    <View style={styles.inputD}><InputDate /></View>

                    <View style={styles.fourOptionsCont}>
                        <View style={styles.optionCont}>
                            <View style={styles.filterOption}><Outlined text="Red Meat"></Outlined></View>
                            <View style={styles.filterOption}><Outlined text="Poultry"></Outlined></View>
                        </View>                    
                        <View style={styles.optionCont}>
                            <View style={styles.filterOption}><Outlined text="Pork"></Outlined></View>
                            <View style={styles.filterOption}><Outlined text="Sheep"></Outlined></View>
                        </View>
                    </View>

                    <View style={style.button}><Button text="Search"></Button></View>
                </ScrollView>
            </View>

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShFilter;