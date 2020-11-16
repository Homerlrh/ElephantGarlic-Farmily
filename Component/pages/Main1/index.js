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
        bottom: "10%",
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
        borderColor: "#FDB833"
    },
    Navi:{
        position:"absolute",
        top:698
    },
});

const Main1 = () => {
    // const [bdcolor, setBdcolor] = useState(null);
    const [btcolor, setBtColor] = useState(null);

    // const bcolor = { borderColor: bcolor ? bcolor : "" }
    const ShClick = () => {
        setBtColor("#2775C9");
    }

    return (
        <View style={styles.container}>
            <LogoHeader
                logo={require("../../public/logo_h.png")}
            />
            <View style={styles.body}>
                <View style={styles.category}>

                    <Underlined
                        text="Discussion"
                        bottomWidth={3}
                    />
                    <Link to="/Main2">
                        <Underlined
                            onPress={() => { setBdcolor("#00AC64") }}
                            bottomWidth={null}
                            text="Market"
                        />
                    </Link>

                </View>
                <ScrollView style={styles.midCont}>
                    <View >
                        < TradePost txt2={null} txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                        < TradePost txt2={null} txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                        < TradePost txt2={null} txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                        < TradePost txt2={null} txt4={null} txt5={null} icon1={null} icon2={null} icon3={null} icon4={null} maxheight={100} />
                    </View>
                </ScrollView>

                <Button text="MORE" />
            </View>
            <View style={styles.row}>
                <Underlined
                    bottom={btcolor}
                    // bottomWidth={3}
                    onPress={ShClick}
                    text="Slaughterhouses"
                // bottomWidth={null}
                />
                <Image
                    style={styles.icon}
                    source={require("../../public/forward.png")}
                />

            </View>

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default Main1;