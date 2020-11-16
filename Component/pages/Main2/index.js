import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";


import LogoHeader from '../../comps/LogoHeader';
import Navigation from '../../comps/Navigation';
import Underlined from '../../comps/Underlined';
import TradePost from '../../comps/TradePost';
import Button from '../../comps/Button';

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
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "8%",
        left: "1%"
    },
    icon: {
        resizeMode: "contain",
        maxWidth: 30,
        maxHeight: 30,
        margin: 10
    },
    category: {
        flexDirection: "row",
    },
    midCont: {
        borderRadius: 10,
        maxWidth: "96%",
        maxHeight: "60%",
        borderWidth: 3,
        overflow: "hidden",
        borderColor: "#00AC64"
    },
});

const Main2 = () => {
    // const [bdcolor, setBdcolor] = useState(null);

    // const bcolor = { borderColor: bcolor ? bcolor : "" }

    return (
        <View style={styles.container}>
            <LogoHeader
                logo={require("../../public/logo_h.png")}
            />
            <View style={styles.body}>
                <View style={styles.category}>
                    <Link to="/discussion">
                        <Underlined
                            text="Discussion"
                            bottomWidth={null}
                            bottom={null}
                        />
                    </Link>
                    <Underlined
                        bottomWidth={3}
                        bottom="#00AC64"
                        text="Market"
                    />
                </View>
                <ScrollView style={styles.midCont}>
                    <View >
                        < TradePost txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                        < TradePost txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                        < TradePost txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                        < TradePost txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                    </View>
                </ScrollView>

                <Button text="MORE" bgcolor="#00AC64" />
            </View>

            <View style={styles.row}>
                <Link to="/">
                    <Underlined
                        onPress={() => { setBdcolor("#00AC64") }}
                        text="Slaughterhouses"
                        bottomWidth={null}
                    />
                </Link>
                <Image
                    style={styles.icon}
                    source={require("../../public/forward.png")}
                />
            </View>
            <Navigation />
        </View>
    );
};

export default Main2;