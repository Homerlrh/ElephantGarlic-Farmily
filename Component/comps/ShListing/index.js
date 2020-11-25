import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		minHeight: 190,
		marginBottom: 10,
		padding: 10,
	},
	row: {
		borderBottomWidth: 1,
		flexDirection: "row",
	},
	imageCont: {
		maxWidth: "100%",
		maxHeight: 100,
		marginBottom: 10,
		borderRadius: 10,
	},
	textCont: {
		maxWidth: "100%",
		minHeight: 50,
		overflow: "hidden",
		marginBottom: 10,
	},
	actions: {
		minWidth: "100%",
		flexDirection: "row",
		height: 20,
	},
	icon: {
		maxWidth: 20,
		maxHeight: 20,
		marginRight: 5,
	},
	brcorner1: {
		flexDirection: "row",
	},
	brcorner2: {
		position: "absolute",
		flexDirection: "row",
		right: 0,
	},
});

const ShListing = ({ txt1, txt2, txt3, txt4, txt5, fontsize, imagePath }) => {
	const [bordercolor, setBdColor] = useState("#E5E5E5");

	const subject = { fontSize: fontsize ? fontsize : 22 };
	const bcolor = { borderColor: bordercolor ? bordercolor : "#2775C9" };

	return (
		<View
			style={[styles.container, styles.cont, bcolor]}
			onTouchStart={() => {
				setBdColor("#2775C9");
			}}
			onTouchEnd={() => {
				setBdColor("#E5E5E5");
			}}
		>
			<Image
				style={styles.imageCont}
				resizeMode="cover"
				source={imagePath ? imagePath : require("../../public/sh1.jpg")}
			/>

			<View style={styles.textCont}>
				<Text style={(styles.cont, subject)}>{txt1}</Text>
				<Text>{txt2}</Text>
			</View>

			<View style={styles.actions}>
				<View style={styles.brcorner1}>
					<Image
						style={styles.icon}
						source={require("../../public/star.png")}
					/>
					<Text>{txt3}</Text>
					<Text style={{ marginLeft: 5 }}>{txt4}</Text>
				</View>
				<View style={styles.brcorner2}>
					<Image
						style={styles.icon}
						source={require("../../public/heart.png")}
					/>
					<Text>{txt5}</Text>
				</View>
			</View>
		</View>
	);
};

ShListing.defaultProps = {
	txt1: "My slaughterhouse result title",
	txt2:
		"This is one of the slaughterhouse from the search results, this should be showing on the slaughterhouse listing page...",
	txt3: "4.5",
	txt4: "(728)",
	txt5: "20",
};
export default ShListing;
