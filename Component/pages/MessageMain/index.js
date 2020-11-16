import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import MsgBox from '../../comps/MsgBox';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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
    MsgNavi:{
        position:"absolute",
        top:698
    },
});

const MessageMain = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Message"
                iconLeft="none"
                iconRight="none"
                bottomColor="#C97064"
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

                <MsgBox />
                <MsgBox
                    imagePath={require('../../public/a2.png')}
                    txt1="NewFarmer"
                    txt2="I totally agree with you..."
                />
                <MsgBox
                    imagePath={require('../../public/a3.png')}
                    txt1="HandsomeMan"
                    txt2="What's up? Long time no talk..."
                />
                <MsgBox
                    imagePath={require('../../public/a4.png')}
                    txt1="HappyFarmer"
                    txt2="See you tomorrow!😎"
                />
            </View>
            <View style={styles.MsgNavi}><Navigation /></View>
        </View>
    );
};

export default MessageMain;