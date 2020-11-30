// import React from "react";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostBodyD from "../../comps/PostBodyD";

const MyTab2 = ({ iconExpand, text, dropdown }) => {
	const [isdrop, setDrop] = useState(false);
	const [bordercolor, setBdColor] = useState("#DADADA");
	const bcolor = { borderColor: bordercolor ? bordercolor : "#DADADA" };
	const hourCont = { display: isdrop ? "flex" : "none" };

	useEffect(() => {
		setDrop(dropdown);
	}, [dropdown]);

	return (
		<View
			style={[styles.container, bcolor]}
			onTouchStart={() => {
				setBdColor("#C97064");
			}}
			onTouchEnd={() => {
				setBdColor("#DADADA");
			}}
		>
			<View style={styles.timeContainer}>
				{/* <Text style={styles.title}>{text}</Text> */}
				<TouchableOpacity
					style={styles.hourCont}
					onPress={() => {
						setDrop(!isdrop);
					}}
				>
					<Text style={styles.title}>{text}</Text>
					{/* <Image source={iconExpand} style={styles.headIconE}/> */}
				</TouchableOpacity>

				<View isdrop={isdrop} style={[styles.hourContainer, hourCont]}>
					<PostBodyD />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		width: 400,
		maxHeight: "100%",
		marginHorizontal: 50,
		padding: 20,
		display: "flex",
		flexDirection: "row",
		alignContent: "space-between",
	},
	title: {
		fontSize: 24,
		alignItems: "flex-start",
		justifyContent: "center",
		fontWeight: "bold",
	},
	hourContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		resizeMode: "contain",
		marginTop: "10%",
		marginRight: "30%",
	},
});
MyTab2.defaultProps = {
	iconExpand: require("./expand_more.png"),
	text: "Default",
	dropdown: () => {},
};
export default MyTab2;
