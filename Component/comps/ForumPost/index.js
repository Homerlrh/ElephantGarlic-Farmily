import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#E5E5E5",
        maxWidth: "100%",
        maxHeight: 150,
        padding: 15,
    },

    row: {
        flexDirection: "row",
    },
    texts: {
        maxWidth: "60%",
    },
    photo: {
        maxWidth: "40%",
        maxHeight: 80,
        flexGrow: 1,
    },
    actions: {
        flexDirection: "row",
        marginTop: 20,
    },

    icon: {
        maxWidth: 20,
        maxHeight: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    smtxt: {
        marginLeft: 5,
        marginRight: 5,
    },
    brcorner1: {
        maxWidth: "50%",
        flexDirection: "row",
    },
    brcorner2: {
        minWidth: "35%",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
})

const ForumPost = ({ txt1, txt2, txt3, txt4, fontsize }) => {

    const [bordercolor, setBdColor] = useState("#E5E5E5");

    const subject = { fontSize: fontsize ? fontsize : 22 };
    const bcolor = { borderColor: bordercolor ? bordercolor : "#E5E5E5" };

    return <View style={[styles.container, styles.cont, bcolor]}
        onTouchStart={() => { setBdColor("#FDB833"); }}
        onTouchEnd={() => { setBdColor("#E5E5E5"); }}
    >
        <View style={styles.row}>
            <View style={styles.texts}>
                <Text
                    style={[styles.cont, subject]}
                >{txt1}</Text>
                <Text>{txt2}</Text>
            </View>

            <Image
                style={styles.photo}
                source={require('../../public/dogs.png')}
            />
        </View>

        <View style={styles.actions}>
            <View style={styles.brcorner1}>
                <Image
                    style={styles.icon}
                    source={require('../../public/heart.png')}
                />
                <Text
                    style={styles.smtxt}
                >{txt3}</Text>
                <Image
                    style={styles.icon}
                    source={require('../../public/msg3.png')}
                />
                <Text
                    style={styles.smtxt}
                >{txt4}</Text>
            </View>
            <View style={styles.brcorner2}>
                <Image
                    style={styles.icon}
                    source={require('../../public/share.png')}
                />
                <Image
                    style={styles.icon}
                    source={require('../../public/more.png')}
                />
            </View>
        </View>
    </View>
}

ForumPost.defaultProps = {
    txt1: "My dogs are cute...",
    txt2: "Look at my cute dogs. Even if you are a cat person you are gonna love my dog...",
    txt3: "1.2k",
    txt4: "1.8k",
    fontSize: 50
}
export default ForumPost;