import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
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
	outerbox: {},
	underText: {
		fontWeight: "bold",
		color: "#000000",
		fontSize: 24,
	},
});
const FilterButton = ({
	type,
	text,
	setFilter,
	setCurrentSelection,
	currentSelection,
}) => {
	const conditionalRender = StyleSheet.create({
		underline1: {
			borderBottomWidth: 3,
			borderBottomColor:
				currentSelection == "Discussion" ? "#FDB833" : "#00AC64",
			padding: 10,
		},
		userline2: {
			borderBottomWidth: 3,
			borderBottomColor: "rgba(52, 52, 52, 0)",
			padding: 10,
		},
	});
	return (
		<TouchableOpacity
			onPress={() => {
				setFilter(type);
				setCurrentSelection(type);
			}}
		>
			<View
				style={
					currentSelection == type
						? conditionalRender.underline1
						: conditionalRender.userline2
				}
			>
				<Text style={styles.underText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

FilterButton.defaultProps = {};
export default FilterButton;
