import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
        width: 375,
        padding: 15,
    },
    avatar: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    inner1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25,
        paddingLeft: 5,
    },

    inner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        maxWidth:20,
        maxHeight:20,
        marginRight:-40
    },
    text: {
        fontSize: 24,
    }
})

const MarketHeading = ({ txt1, txt2, txt3, txt4, txt5, txt6 }) => {

    return <View style={styles.container}>
        <View style={styles.inner1}>
            <Text style={styles.text}>{txt1}</Text>
            <Text style={styles.text}>{txt2}</Text>
        </View>
        <View style={styles.inner}>
            <View style={styles.inner}>
                <Image
                    style={styles.avatar}
                    source={require('../../public/a2.png')}
                />
                <Text>{txt3}</Text>
            </View>
            <View>
                <Text>{txt4}</Text>
            </View>
            <View>
                <View style={styles.inner}>
                    <Image
                        style={styles.icon}
                        source={require('../../public/heart.png')}
                    />
                    <Text>{txt5}</Text>
                </View>
                <View style={styles.inner}>
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