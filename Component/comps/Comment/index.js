import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderTopWidth: 1,
		// borderColor: "#DADADA",
		width: 375,
		padding: 15,
		// marginBottom: 20,
	},
	avatar: {
		width: 25,
		height: 25,
	},
	icon: {
		maxWidth: 25,
		maxHeight: 25,
		resizeMode: "contain",
		margin: "3%",
	},
	cont1: {
		flexDirection: "row",
		justifyContent: "center",
		minWidth: "15%",
	},
	cont2: {
		minWidth: "73%",
	},
	action: {
		bottom: "-5%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	text: {
		fontSize: 18,
	},
});

const Comment = ({ txt1, txt2, txt3, imagePath, followUp }) => {
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
			<View style={styles.cont1}>
				<Image style={styles.icon} source={followUp} />
				<Image
					style={styles.avatar}
					source={imagePath ? imagePath : require("../../public/a1.png")}
				/>
			</View>
			<View style={styles.cont2}>
				<View></View>
				<View>
					<Text style={styles.text}>{txt1}</Text>
					<Text>{txt2}</Text>
				</View>
				<View style={styles.action}>
					<Text>{txt3}</Text>
					<Image
						style={styles.icon}
						source={require("../../public/reply.png")}
					/>
				</View>
			</View>
		</View>
	);
};

Comment.defaultProps = {
	txt1: "Jason S",
	txt2: "Hi, i'd like to buy the tractor...",
	txt3: "10.04.2020",
	followUp: null,
};
export default Comment;
