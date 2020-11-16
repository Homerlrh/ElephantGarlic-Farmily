import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';


import TradePost from '../../comps/TradePost';
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

const MpBoard = ({ navigation }) => {

    const handleMpost = () => {
        navigation.navigate("OneMarket")
    }
    return (
        <View style={styles.container}>
            <Header
                text="Discussion"
                iconRight={require('../../public/pencil.png')}
                iconLeft={require('../../public/filter.png')}
                bottomColor="#00AC64"
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
                <TouchableOpacity onPress={handleMpost}>
                    <TradePost />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMpost}>
                    <TradePost
                        imagePath={require('../../public/tractor1.png')}
                        txt1="item 2 for sale"
                        txt2="$300"
                        txt3="its me again"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMpost}>
                    <TradePost
                        imagePath={require('../../public/tractor2.png')}
                        txt1="item 3 for sale"
                        txt2="$700"
                        txt3="OMG"
                    />
                </TouchableOpacity>


            </View>
            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default MpBoard;