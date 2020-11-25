import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Text,
	Image,
} from "react-native";

import DiscussionHeading from "../../comps/DiscussionHeading";
import PostBodyD from "../../comps/PostBodyD";
import Comment from "../../comps/Comment";
import Header from "../../comps/Header";
import { AuthContext } from "../..";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "5%",
	},
	contentContainer: {
		position: "absolute",
		top: "14%",
		maxHeight: "65%",
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
	Navi: {
		position: "absolute",
		top: 698,
	},
});

const OneDiscussion = ({ navigation, route }) => {
	const [isReady, setReady] = useState(false);
	const [detailPost, setDetail] = useState();

	const authContext = useContext(AuthContext);
	const { postId } = route.params;

	useEffect(() => {
		setReady(false);
		const p = authContext.posts.filter((post) => post.postId === postId);
		setDetail(p[0]);
		setReady(true);
	}, [setDetail]);

	return isReady === false ? (
		<View style={styles.container}>
			<ActivityIndicator animating={!isReady} size="large" />
			<Text>Loading</Text>
		</View>
	) : (
		<View style={styles.container}>
			<Header
				text="Discussion"
				iconRight={require("../../public/heart.png")}
				iconLeft={require("../../public/back.png")}
				bottomColor="#FDB833"
				fuc1={() => {
					navigation.goBack();
				}}
			/>
			<ScrollView style={styles.contentContainer}>
				<View>
					<DiscussionHeading txt1={detailPost.title} />
					<PostBodyD txt1={detailPost.description} img={detailPost.images} />
					<Comment />
					<Comment followUp={require("../../public/follow_up.png")} />
					<Comment followUp={require("../../public/follow_up.png")} />
					<Comment followUp={require("../../public/follow_up.png")} />
				</View>
			</ScrollView>
		</View>
	);
};

export default OneDiscussion;
