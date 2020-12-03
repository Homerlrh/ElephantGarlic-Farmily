import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderWidth: 1,
		// borderColor: "#DADADA",
		borderRadius: 8,
		width: 375,
		padding: 15,
		marginBottom: 20,
	},
	avatar: {
		height: 40,
		width: 50,
		marginRight: 20,
	},

	text: {
		fontSize: 18,
	},
});

const MsgBox = ({ txt1, txt2, imagePath }) => {
	const [bordercolor, setBdColor] = useState("#DADADA");

	const bcolor = { borderColor: bordercolor ? bordercolor : "#DADADA" };

	return (
		<View
			style={[styles.container, styles.cont, bcolor]}
			onTouchStart={() => {
				setBdColor("#C97064");
			}}
			onTouchEnd={() => {
				setBdColor("#DADADA");
			}}
		>
			<View>
				<Image
					style={styles.avatar}
					source={
						imagePath ? { uri: imagePath } : require("../../public/a1.png")
					}
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
	);
};

MsgBox.defaultProps = {
	txt1: "Jason S",
	txt2: "Hi, i'd like to buy the tractor...",
};
export default MsgBox;
