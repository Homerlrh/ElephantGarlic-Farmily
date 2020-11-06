import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        // borderColor: "#E5E5E5",
        width: '90%',
        height: 280,
    },
    row: {
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    imageCont: {
        maxWidth: "100%",
        maxHeight: 150,
        marginBottom: 10,
    },
    actions: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 10,
    },
    icon: {
        maxWidth: 20,
        maxHeight: 20,
        marginRight: 5,
    },
    brcorner1: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    brcorner2: {
        paddingLeft: "50%",
        flexDirection: "row",
        justifyContent: "flex-end",
    }

})

const ShListing = ({ txt1, txt2, txt3, txt4, txt5, fontsize }) => {
    const [bordercolor, setBdColor] = useState("#2775C9");

    const subject = { fontSize: fontsize ? fontsize : 22 };
    const bcolor = { borderColor: bordercolor ? bordercolor : "#2775C9" };

    return <View style={[styles.container, styles.cont, bcolor]}
        onTouchStart={() => { setBdColor('#2775C9'); }}
        onTouchEnd={() => { setBdColor('#E5E5E5'); }}
    >
        <View style={styles.imageCont}>
            <Image
                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                resizeMode='cover'
                source={require('../../public/sh1.jpg')}
            />
        </View>

        <View>
            <Text
                style={styles.container, subject}
            >{txt1}</Text>
            <Text>{txt2}</Text>
        </View>
        <View style={styles.actions}>
            <View style={styles.brcorner1} >
                <Image
                    style={styles.icon}
                    source={require('../../public/star.png')}
                />
                <Text>{txt3}</Text>
                <Text
                    style={{ marginLeft: 5 }}
                >{txt4}</Text>

            </View>
            <View style={styles.brcorner2}>
                <Image
                    style={styles.icon}
                    source={require('../../public/heart.png')}
                />
                <Text>{txt5}</Text>
            </View>
        </View>

    </View>
}

ShListing.defaultProps = {
    txt1: 'My slaughterhouse result title',
    txt2: 'This is one of the slaughterhouse from the search results, this should be showing on the slaughterhouse listing page...',
    txt3: '4.5',
    txt4: '(728)',
    txt5: '20'
}
export default ShListing;