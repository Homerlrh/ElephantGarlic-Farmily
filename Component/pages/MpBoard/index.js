import React, { useState, useEffect, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import TradePost from "../../comps/TradePost";
import Header from "../../comps/Header";
import { AuthContext } from "../..";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "10%",
	},
	body: {
		position: "absolute",
		top: "14%",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		// alignItems: "center"
		justifyContent: "center",
	},
	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		margin: 10,
	},
	Navi: {
		position: "absolute",
		top: 698,
	},
});

const MpBoard = ({ navigation }) => {
	const [dpost, setDpost] = useState([]);
	const authContext = useContext(AuthContext);
	useEffect(() => {
		const discussion = authContext.posts.filter(
			(post) => post.postType === "market"
		);
		setDpost(discussion);
	}, [authContext.posts]);

	const list = dpost.map((post) => (
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
	));

	return (
		<View style={styles.container}>
			<Header
				text="Market"
				iconRight={require("../../public/pencil.png")}
				iconLeft={require("../../public/filter.png")}
				bottomColor="#00AC64"
				fuc2={() => {
					navigation.push("createPost", { type: "market" });
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
				<ScrollView style={{ maxHeight: 600 }}>{list}</ScrollView>
			</View>
		</View>
	);
};

export default MpBoard;
