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
import { AuthContext } from "../..";
import { getPostByUserId } from "../../../firebase/collection/readData";
import Header from "../../comps/Header";
import TradePost from "../../comps/TradePost";

export default function MyMarket({ navigation }) {
	const authContext = useContext(AuthContext);
	const [dpost, setDpost] = useState([]);

	useEffect(() => {
		(async () => {
			const userPosts = await getPostByUserId(authContext.user.id);
			const p = userPosts.filter((post) => post.postType === "market");
			setDpost(p);
		})();
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
				text="Created Discussion"
				iconRight={require("../../public/pencil.png")}
				iconLeft={require("../../public/back.png")}
				bottomColor="#00AC64"
				fuc1={() => {
					navigation.goBack();
				}}
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
}

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
