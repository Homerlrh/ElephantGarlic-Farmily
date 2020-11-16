import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


import MarketHeading from '../../comps/MarketHeading';
import PostBodyM from '../../comps/PostBodyM';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Button from '../../comps/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        // flex:1,
        position: "absolute",
        top: "14%",
        // alignItems: 'center',
        // borderWidth:3,
        maxHeight: "100%"
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

const OneMarket = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Market Place"
                iconRight={require('../../public/heart.png')}
                iconLeft={require('../../public/back.png')}
                bottomColor="#00AC64"
            />
            <ScrollView style={styles.contentContainer}>
                <View>
                    <MarketHeading />
                    <PostBodyM />
                </View>
                <Button
                text="Contact the Seller" 
                bgcolor="#00AC64"
                />
            </ScrollView>
            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default OneMarket;