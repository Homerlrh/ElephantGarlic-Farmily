import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#DADADA",
        borderRadius: 8,
        width: 375,
        padding: 15,
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 20
    },

    text: {
        fontSize: 18,
    }
})

const MsgBox = ({ txt1, txt2, imagePath }) => {



    return <View style={styles.container}>
        <View>
            <Image
                style={styles.avatar}
                source={imagePath ? imagePath : require('../../public/a1.png')}
            />
        </View>
        <View>
            <View>
                <Text style={styles.text}>{txt1}</Text>
            </View>
            <View>
                <Text>{txt2}</Text>
            </View>

        </View>

    </View>
}

MsgBox.defaultProps = {
    txt1: "Jason S",
    txt2: "Hi, i'd like to buy the tractor..."
}
export default MsgBox;