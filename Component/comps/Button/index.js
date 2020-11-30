import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		margin: 20,
		alignContent: "center",
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 5.5 },
		//shadowOpacity: 0.7
	},
	buttontext: {
		color: "#FFFFFF",
		fontWeight: "bold",
		textAlign: "center",
		padding: 10,
	},
});

const Button = ({ bgcolor, text, handler, width }) => {
	const [onpress, setPress] = useState(0.7);

	const pressB = { shadowOpacity: onpress ? 0.7 : 0 };

	const position = { bottom: onpress ? 0 : -3 };

	return (
		<TouchableOpacity onPress={handler} style={{ width: width }}>
			<View
				style={[styles.container]}
				backgroundColor={bgcolor}
				onTouchStart={() => {
					setPress(0);
				}}
				onTouchEnd={() => {
					setPress(0.7);
				}}
			>
				<Text style={styles.buttontext}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

Button.defaultProps = {
	bgcolor: "#FDB833",
	text: "Default",
};

export default Button;
