import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MyTab = ({ iconView, text, onpress }) => {
	const [bordercolor, setBdColor] = useState("#DADADA");

	// const subject = { fontSize: fontsize ? fontsize : 22 };
	const bcolor = { borderColor: bordercolor ? bordercolor : "#DADADA" };
	return (
		<TouchableOpacity onPress={onpress}>
			<View
				style={[styles.container, bcolor]}
				onTouchStart={() => {
					setBdColor("#C97064");
				}}
				onTouchEnd={() => {
					setBdColor("#DADADA");
				}}
			>
				<View style={styles.cont}>
					<Text style={styles.title}>{text}</Text>

					<Image source={iconView} style={styles.headIconV} />
				</View>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	container: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		minWidth: "100%",
	},
	cont: {
		maxWidth: "90%",
		maxHeight: 75,
		justifyContent: "center",
		marginHorizontal: 40,
		padding: 13,
		display: "flex",
		flexDirection: "row",
		alignContent: "space-between",
		alignItems: "flex-start",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 25,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		fontWeight: "bold",
	},
	headIconV: {
		position: "relative",
		left: 15,
		marginVertical: 12,
		maxHeight: 20,
		maxWidth: 20,
		resizeMode: "contain",
	},
});
MyTab.defaultProps = {
	iconView: require("./iconfinder_right.png"),
	text: "Default",
};
export default MyTab;
