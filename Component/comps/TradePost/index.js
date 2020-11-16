import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderTopWidth: 1,
		// borderColor: "#E5E5E5",
		maxWidth: "100%",
		// maxHeight: 150,
		padding: 15,
		overflow: "hidden",
	},

	row: {
		flexDirection: "row",
	},
	subheading: {
		minWidth: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	texts: {
		maxWidth: "65%",
	},
	photo: {
		maxWidth: "30%",
		maxHeight: 80,
		marginRight: "2%",
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
		// borderWidth:1,
		maxWidth: "50%",
		flexDirection: "row",
	},
	brcorner2: {
		minWidth: "35%",
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});

const TradePost = ({
	txt1,
	txt2,
	txt3,
	txt4,
	txt5,
	fontsize,
	imagePath,
	icon1,
	icon2,
	icon3,
	icon4,
	maxheight,
}) => {
	const [bordercolor, setBdColor] = useState("#E5E5E5");

	const subject = { fontSize: fontsize ? fontsize : 19 };
	const height = { maxHeight: maxheight ? maxheight : 150 };
	const bcolor = { borderColor: bordercolor ? bordercolor : "#E5E5E5" };

	return (
		<View
			style={[styles.container, styles.cont, bcolor, height]}
			onTouchStart={() => {
				setBdColor("#00AC64");
			}}
			onTouchEnd={() => {
				setBdColor("#E5E5E5");
			}}
		>
			<View style={styles.row}>
				<Image
					style={styles.photo}
					source={imagePath ? imagePath : require("../../public/tractor.png")}
				/>
				<View style={styles.texts}>
					<View style={styles.subheading}>
						<Text style={[styles.cont, subject]}>{txt1}</Text>
						<Text style={[styles.cont, subject]}>{txt2}</Text>
					</View>
					<Text>{txt3}</Text>
				</View>
			</View>

			<View style={styles.actions}>
				<View style={styles.brcorner1}>
					<Image
						style={styles.icon}
						// source={require('../../public/heart.png')}
						source={icon1}
					/>
					<Text style={styles.smtxt}>{txt4}</Text>
					<Image
						style={styles.icon}
						// source={require('../../public/eye.png')}
						source={icon2}
					/>
					<Text style={styles.smtxt}>{txt5}</Text>
				</View>
				<View style={styles.brcorner2}>
					<Image
						style={styles.icon}
						// source={require('../../public/share.png')}
						source={icon3}
					/>
					<Image
						style={styles.icon}
						// source={require('../../public/more.png')}
						source={icon4}
					/>
				</View>
			</View>
		</View>
	);
};

TradePost.defaultProps = {
	txt1: "Tractor for sale",
	txt2: "$1000",
	txt3:
		"Bought bigger one for more grains... 5 years, perfect condition, $500, message for more details...",
	txt4: "25",
	txt5: "79",
	icon1: require("../../public/heart.png"),
	icon2: require("../../public/eye.png"),
	icon3: require("../../public/share.png"),
	icon4: require("../../public/more.png"),
	maxHeight: 150,
	bcolor: "#FDB833",
};
export default TradePost;
