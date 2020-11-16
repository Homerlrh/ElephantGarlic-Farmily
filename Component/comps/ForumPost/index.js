import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderColor: "#E5E5E5",
		width: "100%",
		height: 150,
		padding: 15,
	},

	row: {
		flexDirection: "row",
	},
	texts: {
		width: "60%",
		height: 80,
	},
	photo: {
		position: "absolute",
		right: 0,
		width: "40%",
		height: 80,
		// flexGrow: 1,
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
	},
});

const ForumPost = ({
	txt1,
	txt2,
	txt3,
	txt4,
	fontsize,
	imagePath,
	icon1,
	icon2,
	icon3,
	icon4,
	maxheight,
}) => {
	const [bordercolor, setBdColor] = useState("#E5E5E5");

	const subject = { fontSize: fontsize ? fontsize : 22 };
	const bcolor = { borderColor: bordercolor ? bordercolor : "#E5E5E5" };
	const height = { maxHeight: maxheight ? maxheight : 150 };

	return (
		<TouchableOpacity>
			<View
				style={[styles.container, styles.cont, bcolor, height]}
				onTouchStart={() => {
					setBdColor("#FDB833");
				}}
				onTouchEnd={() => {
					setBdColor("#E5E5E5");
				}}
			>
				<View style={styles.row}>
					<View style={styles.texts}>
						<Text style={[styles.cont, subject]}>{txt1}</Text>
						<Text>{txt2}</Text>
					</View>

					<Image
						style={styles.photo}
						source={
							imagePath ? { uri: imagePath } : require("../../public/dogs.png")
						}
					/>
				</View>

				<View style={styles.actions}>
					<View style={styles.brcorner1}>
						<Image style={styles.icon} source={icon1} />
						<Text style={styles.smtxt}>{txt3}</Text>
						<Image style={styles.icon} source={icon2} />
						<Text style={styles.smtxt}>{txt4}</Text>
					</View>
					<View style={styles.brcorner2}>
						<Image style={styles.icon} source={icon3} />
						<Image style={styles.icon} source={icon4} />
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

ForumPost.defaultProps = {
	txt1: "My dogs are cute...",
	txt2:
		"Look at my cute dogs. Even if you are a cat person you are gonna love my dog...",
	txt3: "1.2k",
	txt4: "1.8k",
	icon1: require("../../public/heart.png"),
	icon2: require("../../public/eye.png"),
	icon3: require("../../public/share.png"),
	icon4: require("../../public/more.png"),
	fontSize: 50,
};
export default ForumPost;
