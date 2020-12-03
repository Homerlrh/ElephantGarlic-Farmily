// import React from "react";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ForumPost from "../ForumPost";
import TradePost from "../TradePost";

const MyTab2 = ({ iconExpand, text, dropdown, post, navigation }) => {
	const [isdrop, setDrop] = useState(false);
	const [bordercolor, setBdColor] = useState("#DADADA");
	const bcolor = { borderColor: bordercolor ? bordercolor : "#DADADA" };
	const hourCont = { display: isdrop ? "flex" : "none" };

	useEffect(() => {
		setDrop(dropdown);
	}, [dropdown]);

	const list = post
		? post.map((post) =>
				post.postType == "discussion" ? (
					<TouchableOpacity
						key={post.postId}
						onPress={() => {
							navigation.navigate("discussionDetail", { postId: post.postId });
						}}
					>
						<View>
							<ForumPost
								txt1={post.title}
								txt2={post.description}
								imagePath={post.images[0]}
							/>
						</View>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						key={post.postId}
						onPress={() => {
							navigation.navigate("marketDetail", { postId: post.postId });
						}}
					>
						<TradePost
							txt1={post.title}
							txt3={post.description}
							imagePath={post.images[0]}
						/>
					</TouchableOpacity>
				)
		  )
		: null;

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
				<TouchableOpacity
					style={styles.hourCont}
					onPress={() => {
						setDrop(!isdrop);
					}}
				>
					<Text style={styles.title}>{text}</Text>
				</TouchableOpacity>

				<View isdrop={isdrop} style={[styles.hourContainer, hourCont]}>
					{list}
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
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		resizeMode: "contain",
		marginTop: 30,
	},
});
MyTab2.defaultProps = {
	iconExpand: require("./expand_more.png"),
	text: "Default",
	dropdown: () => {},
};
export default MyTab2;
