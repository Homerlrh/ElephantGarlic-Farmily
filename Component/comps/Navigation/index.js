import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
	naviBox: {
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		borderTopWidth: 1.5,
		borderTopColor: "#E5E5E5",
	},
	icons: {
		margin: 12,
	},
});

const Navigation = ({}) => {
	return (
		<View style={styles.naviBox}>
			<Image source={require("./home.png")} style={styles.icons} />
			<Image source={require("./notification.png")} style={styles.icons} />
			<Image source={require("./profile.png")} style={styles.icons} />
			<Image source={require("./favourite.png")} style={styles.icons} />
			<Image source={require("./chat.png")} style={styles.icons} />
		</View>
	);
};

Navigation.defaultProps = {};

export default Navigation;
