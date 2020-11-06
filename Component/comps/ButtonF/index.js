import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FDB833",
		borderRadius: 20,
		margin: 20,
		alignContent: "center",
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 5.5 },
		shadowOpacity: 0.7,
	},
	buttontext: {
		color: "#FFFFFF",
		fontWeight: "bold",
		textAlign: "center",
		padding: 10,
		fontSize: 25,
	},
});

const ButtonF = ({ bgcolor, text, behaviour }) => {
	return (
		<TouchableOpacity onPress={behaviour} style={{ width: "70%" }}>
			<View style={styles.container} backgroundColor={bgcolor}>
				<Text style={styles.buttontext}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

ButtonF.defaultProps = {
	bgcolor: "#FDB833",
	text: "Default",
};

export default ButtonF;
