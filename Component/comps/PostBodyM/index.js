import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import ImageGallery from "../ImageGallery";
import Button from "../Button";

const styles = StyleSheet.create({
	container: {
		margin: "5%",
		alignItems: "center",
		// borderWidth: 1
	},
	col: {
		alignItems: "center",
		// borderWidth: 1
	},
	text: {
		marginBottom: "5%",
	},
	icon: {
		maxWidth: 25,
		maxHeight: 25,
		marginLeft: "3%",
		marginRight: "3%",
	},
	row: {
		flexDirection: "row",
		marginTop: "10%",
	},
});

const PostBodyM = ({ txt1, img }) => {
	return (
		<View style={styles.container}>
			<View style={styles.col}>
				<Text style={styles.text}>{txt1}</Text>
				<ImageGallery grp={img} />
			</View>
		</View>
	);
};

PostBodyM.defaultProps = {
	txt1:
		"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
	txt2: "30",
};

export default PostBodyM;
