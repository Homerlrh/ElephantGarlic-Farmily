import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
        minWidth: 375,
        padding: 15,
    },

    avatar: {
        width: 30,
        height: 30,
        marginRight: 10
    },

    inner1: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:25,
        paddingLeft:5,
    },

    inner: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    icon: {
        maxWidth:20,
        maxHeight:20,
        marginRight:-40
    },

    text: {
        fontSize:24,
    }
})

const DiscussionHeading = ({ txt1, txt2, txt3, txt4, txt5 }) => {

    return <View style={styles.container}>
        <View style={styles.inner1}>
            <Text style={styles.text}>{txt1}</Text>
        </View>
        <View style={styles.inner}>
            <View style={styles.inner}>
                <Image
                    style={styles.avatar}
                    source={require('../../public/a5.png')}
                />
                <Text>{txt2}</Text>
            </View>
            <View>
                <Text>{txt3}</Text>
            </View>
            <View>
                <View style={styles.inner}>
                    <Image
                        style={styles.icon}
                        source={require('../../public/heart.png')}
                    />
                    <Text>{txt4}</Text>
                </View>
                <View style={styles.inner}>
                    <Image
                        style={styles.icon}
                        source={require('../../public/eye.png')}
                    />
                    <Text>{txt5}</Text>
                </View>
            </View>
        </View>
    </View>
}

DiscussionHeading.defaultProps = {
    txt1: "Can someone help me with ...",
    txt2: "YoungFarmer",
    txt3: "10.04.2020",
    txt4: "50",
    txt5: "28",
    fontSize: 50
}
export default DiscussionHeading;