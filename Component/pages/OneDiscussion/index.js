import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Text,
	Image,
	TextInput,
	Button,
} from "react-native";

import DiscussionHeading from "../../comps/DiscussionHeading";
import PostBodyD from "../../comps/PostBodyD";
import Comment from "../../comps/Comment";
import Header from "../../comps/Header";
import { AuthContext } from "../..";
import { getAllCommentByPost } from "../../../firebase/collection/readData";
import { commentPost } from "../../../firebase/collection/writeData";
import { db } from "../../../firebase/firebase";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "5%",
	},
	contentContainer: {
		maxWidth: "100%",
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
	Navi: {
		position: "absolute",
		top: 698,
	},
	inputSpace: {
		marginBottom: 15,
		width: "80%",
		borderColor: "#000",
		borderRadius: 5,
		borderWidth: 1,
		paddingVertical: 8,
		paddingLeft: 5,
	},
});

const OneDiscussion = ({ navigation, route }) => {
	const [isReady, setReady] = useState(false);
	const [detailPost, setDetail] = useState();
	const [commentList, setCommentList] = useState([]);
	const [comment, setComment] = useState();
	const authContext = useContext(AuthContext);
	const { postId } = route.params;

	useEffect(() => {
		setReady(false);
		const p = authContext.posts.filter((post) => post.postId === postId);
		setDetail(p[0]);
		setReady(true);
	}, [setDetail]);

	useEffect(() => {
		setReady(false);
		getAllCommentByPost(postId).then((data) => {
			setCommentList(data);
			setReady(true);
		});
	}, []);

	const handleComment = async () => {
		if (comment != "") {
			await commentPost(postId, comment);
		}
	};

	const commentArea = commentList.map((data, index) => (
		<View key={index}>
			<Text>
				{data.createdBy}: {data.comment}
			</Text>
		</View>
	));

	db.collection("posts")
		.doc(postId)
		.collection("comment")
		.orderBy("createdAt", "desc")
		.limit(1)
		.onSnapshot((snapshot) => {
			let changes = snapshot.docChanges();
			changes.forEach((change) => {
				if (change.type == "modified") {
					setCommentList([change.doc.data(), ...commentList]);
				}
			});
		});

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
				<View style={{ alignItems: "center" }}>
					<DiscussionHeading txt1={detailPost.title} />
					<PostBodyD txt1={detailPost.description} img={detailPost.images} />
					<View style={{ width: "90%", flexDirection: "row" }}>
						<TextInput
							style={styles.inputSpace}
							placeholder="Comment"
							onChangeText={(text) => setComment(text)}
							value={comment}
						/>
						<Button title="send" onPress={handleComment} />
					</View>
					{commentArea}
				</View>
			</ScrollView>
		</View>
	);
};

export default OneDiscussion;
