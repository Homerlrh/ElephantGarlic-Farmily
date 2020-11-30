import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
	ShUserCont: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: 8,
	},
	userimg: {
		width: 30,
		height: 30,
	},
	username: {
		fontSize: 13,
		fontWeight: "bold",
		textAlign: "center",
		marginLeft: 5,
	},
});

const ShUser = ({ userImg, userName }) => {
	return (
		<View style={styles.ShUserCont}>
			<Image source={userImg} style={styles.userimg} />
			<Text style={styles.username}>{userName}</Text>
		</View>
	);
};

ShUser.defaultProps = {
	NameText: "Default",
	userImg: require("./user.png"),
	userName: "Username",
};

export default ShUser;
