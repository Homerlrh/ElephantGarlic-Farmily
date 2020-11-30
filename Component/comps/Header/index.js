import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	headerBox: {
		position: "absolute",
		top: 0,
		borderBottomColor: "#E5E5E5",
		borderBottomWidth: 1.5,
		minWidth: "100%",
		minHeight: "15%",
	},
	innerHeadBox: {
		alignItems: "center",
		flexDirection: "row",
		margin: 5,
		justifyContent: "space-between",
	},
	innerText: {
		borderBottomWidth: 3,
		padding: 10,
		marginBottom: 13,
		justifyContent: "center",
	},
	headIconL: {
		position: "relative",
		left: 15,
		maxHeight: 35,
		maxWidth: 35,
		resizeMode: "contain",
	},
	headText: {
		fontWeight: "bold",
		fontSize: 24,
	},
	headIconR: {
		position: "relative",
		right: 15,
		maxHeight: 35,
		maxWidth: 35,
		resizeMode: "contain",
	},
	logo: {
		resizeMode: "contain",
		maxWidth: 300,
	},
});

const Header = ({
	iconLeft,
	text,
	iconRight,
	bottomColor,
	logo,
	fuc1,
	fuc2,
}) => {
	return (
		<View style={styles.headerBox}>
			<Image source={logo} style={styles.logo} />
			<View style={styles.innerHeadBox}>
				<TouchableOpacity onPress={fuc1}>
					<Image source={iconLeft} style={styles.headIconL} />
				</TouchableOpacity>
				<View style={styles.innerText} borderBottomColor={bottomColor}>
					<Text style={styles.headText}>{text}</Text>
				</View>
				<TouchableOpacity onPress={fuc2}>
					<Image source={iconRight} style={styles.headIconR} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

Header.defaultProps = {
	iconLeft: null,
	text: null,
	iconRight: null,
	bottomColor: null,
	logo: null,
};

export default Header;
