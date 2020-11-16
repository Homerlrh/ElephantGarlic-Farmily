import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


import ShListing from '../../comps/ShListing';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        position: "absolute",
        top: "14%",
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        // alignItems: "center"
        justifyContent: "center"
    },
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    Navi: {
        position: "absolute",
        top: 698
    },
});

const ShMain = ({ navigation }) => {

    const handleShB = () => {
        navigation.navigate("ShB");
    }
    return (
        <View style={styles.container}>
            <Header
                text="SlaughterHouse"
                iconRight={require('../../public/map.png')}
                iconLeft={require('../../public/back.png')}
                bottomColor="#2775C9"
            />
            <View style={styles.body}>
                {/* this input is for testing pages only -- start */}
                <View style={styles.row}>
                    <TextInput
                        style={{ height: 40, width: "60%", borderColor: 'gray', borderWidth: 1, marginBottom: "6%", borderRadius: 5, textAlign: "center" }}
                    >For testing, will fix later</TextInput>
                    <Image
                        source={require('../../public/search.png')}
                        style={styles.icon}
                    ></Image>
                </View>
                {/* this input is for testing pages only -- end */}
                    <TouchableOpacity onPress={handleShB}>
                        <ShListing />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShB}>
                        <ShListing
                            imagePath={require('../../public/sh3.png')}
                            txt1="Nanaimo Slaughterhouse"
                            txt2="We are the biggest slaughterhouse in Nanaimo..."
                            txt3="4.8"
                            txt4="(259)"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShB}>
                        <ShListing
                            imagePath={require('../../public/sh3.png')}
                            txt1="Nanaimo Slaughterhouse"
                            txt2="We are the biggest slaughterhouse in Nanaimo..."
                            txt3="4.8"
                            txt4="(259)"
                        />
                    </TouchableOpacity>
            </View>
            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShMain;