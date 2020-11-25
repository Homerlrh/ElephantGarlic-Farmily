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
		// backgroundColor: "#fff",
		// borderTopLeftRadius: 10,
		// borderTopRightRadius: 10,
		// borderBottomLeftRadius: 10,
		// borderBottomRightRadius: 10,
		borderTopWidth: 1,
		borderBottomWidth: 1,

		// borderTopColor:"#DADADA",
		// borderBottomColor:"#DADADA",
		// borderRightColor:"#fff",
		// borderLeftColor:"#fff",
		// borderColor: "#2775C9",
		width: 400,
		maxHeight: "100%",
		// justifyContent: "center",
		// marginVertical: 8,
		// marginTop: 100,
		marginHorizontal: 50,
		padding: 20,
		display: "flex",
		flexDirection: "row",
		alignContent: "space-between",
	},
	title: {
		fontFamily: "Josefin Sans",
		fontSize: 24,
		// style:"normal",
		alignItems: "flex-start",
		justifyContent: "center",
		// marginHorizental: 100,
		// marginLeft: 20,
		fontWeight: "bold",
	},
	// headIconE: {
	//   position:"relative",
	//   right:0,
	//   // marginVertical:5,
	//   maxHeight:30,
	//   maxWidth:30,
	//   resizeMode:"contain"
	// },

	hourContainer: {
		// backgroundColor: "#FFFFFF",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		//  alignSelf: "stretch",
		resizeMode: "contain",
		marginTop: "10%",
		marginRight: "30%",
		//  marginRight:70
	},
});
MyTab2.defaultProps = {
	iconExpand: require("./expand_more.png"),
	text: "Default",
	dropdown: () => {},
};
export default MyTab2;
