import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatBubble = ({ msg, background }) => {
	return (
		<View style={styles.container} backgroundColor={background}>
			{background == "#DEDEDE" ? (
				<Text style={(styles.text, { color: "#000" })}>{msg}</Text>
			) : (
				<Text style={styles.text}>{msg}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
		backgroundColor: "#C97064",
		display: "flex",
		justifyContent: "flex-end",
		maxWidth: 200,
		borderRadius: 20,
		padding: 18,
		margin: 10,
	},

	text: {
		color: "#FFFFFF",
		fontWeight: "300",
		fontSize: 17,
	},
});

ChatBubble.defaultProps = {
	msg:
		"Hi! My name is Tig! I saw your post, that you're selling your John Deere Tractor. I'm interested in buying it from you!",
	background: "#C97064",
};

export default ChatBubble;
