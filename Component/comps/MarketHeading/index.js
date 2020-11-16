import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        width: 375,
        padding: 15,
    },
    avatar: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25,
        paddingLeft: 5,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
        width:"40%",
        // justifyContent: "space-between",
    },
    icon: {
        maxWidth: 20,
        maxHeight: 20,
        marginRight: -40
    },
    text: {
        fontSize: 24,
    }
})

const MarketHeading = ({ txt1, txt2, txt3, txt4, txt5, txt6, imagePath }) => {
    const [bordercolor, setBdColor] = useState("#DADADA");
    const bcolor = { borderColor: bordercolor ? bordercolor : "#DADADA" };
    return <View style={[styles.container, styles.cont, bcolor]}
        onTouchStart={() => { setBdColor("#00AC64"); }}
        onTouchEnd={() => { setBdColor("#DADADA"); }}
    >
        <View style={styles.heading}>
            <Text style={styles.text}>{txt1}</Text>
            <Text style={styles.text}>{txt2}</Text>
        </View>
        <View style={styles.row}>
            <View style={styles.user}>
                <Image
                    style={styles.avatar}
                    source={imagePath ? imagePath : require('../../public/a2.png')}
                />
                <Text>{txt3}</Text>
            </View>
            <View>
                <Text>{txt4}</Text>
            </View>
            <View>
                <View style={styles.row}>
                    <Image
                        style={styles.icon}
                        source={require('../../public/heart.png')}
                    />
                    <Text>{txt5}</Text>
                </View>
                <View style={styles.row}>
                    <Image
                        style={styles.icon}
                        source={require('../../public/eye.png')}
                    />
                    <Text>{txt6}</Text>
                </View>
            </View>
        </View>
    </View>
}

MarketHeading.defaultProps = {
    txt1: "Tractor for sale",
    txt2: "$5000",
    txt3: "OldGoodFarmer",
    txt4: "10.04.2020",
    txt5: "17",
    txt6: "55",
    fontSize: 50
}
export default MarketHeading;