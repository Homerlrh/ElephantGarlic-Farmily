import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../..";

import ForumPost from "../../comps/ForumPost";
import Header from "../../comps/Header";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: "10%",
	},
	body: {
		marginTop: "30%",
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
	},
	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		margin: 10,
	},
	Forum_Navi: {
		position: "absolute",
		top: 698,
	},
});

const ForumBoard = ({ navigation }) => {
	const [dpost, setDpost] = useState([]);

	const authContext = useContext(AuthContext);
	useEffect(() => {
		const discussion = authContext.posts.filter(
			(x) => x.postType === "discussion"
		);
		setDpost(discussion);
	}, [authContext.posts]);

	const list = dpost.map((post) => (
		<TouchableOpacity
			key={post.postId}
			onPress={() => {
				navigation.navigate("discussionDetail", { postId: post.postId });
			}}
		>
			<ForumPost
				txt1={post.title}
				txt2={post.description}
				imagePath={post.images[0]}
			/>
		</TouchableOpacity>
	));
	return (
		<View style={styles.container}>
			<Header
				text="Discussion"
				iconRight={require("../../public/pencil.png")}
				iconLeft={require("../../public/filter.png")}
				bottomColor="#FDB833"
				fuc2={() => {
					navigation.push("createPost", { type: "discussion" });
				}}
			/>
			<View style={styles.body}>
				{/* this input is for testing pages only -- start */}
				<View style={styles.row}>
					<TextInput
						style={{
							height: 40,
							width: "60%",
							borderColor: "gray",
							borderWidth: 1,
							marginBottom: "6%",
							borderRadius: 5,
							textAlign: "center",
						}}
					>
						For testing, will fix later
					</TextInput>
					<Image
						source={require("../../public/search.png")}
						style={styles.icon}
					></Image>
				</View>
				{/* this input is for testing pages only -- end */}
				<ScrollView>{list}</ScrollView>
			</View>
		</View>
	);
};

export default ForumBoard;
