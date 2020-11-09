import React, { useEffect, useState, useContext } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	TextInput,
	Button,
	Alert,
} from "react-native";
import {
	getPostById,
	getAllCommentByPost,
} from "../../firebase/collection/readData";
import { commentPost } from "../../firebase/collection/writeData";
import { AuthContext } from "../index";

import styles from "../styles";
export default function DetailPost({ route, navigation }) {
	const [isReady, setReady] = useState(false);
	const [post, setPost] = useState();
	const [comment, setComment] = useState();
	const [comments, setComments] = useState([]);
	const authContext = useContext(AuthContext);

	const { postId } = route.params;

	useEffect(() => {
		setReady(false);

		(async () => {
			const currentPost = await getPostById(postId);
			const postComment = await getAllCommentByPost(postId);
			setPost(currentPost);
			setComments(postComment);
			setReady(true);
		})();
	}, [setPost]);

	const handleComment = () => {
		const data = {
			createdBy: authContext.user,
			comment,
		};
		try {
			commentPost(post.postId, comment);
			setComments([...comments, data]);
			setComment("");
		} catch (err) {
			Alert.alert(err);
		}
	};

	const c = comments.map((comment) => (
		<Text key={comment.createdBy}>
			{comment.createdBy}: {comment.comment}
		</Text>
	));

	return isReady === false ? (
		<View style={styles.container}>
			<ActivityIndicator animating={!isReady} size="large" />
			<Text>Loading</Text>
		</View>
	) : (
		<View>
			<Text>Title: {post.title}</Text>
			<Text>Description: {post.description}</Text>

			<View>
				<Text>Comments</Text>
				{c}
			</View>
			<View>
				<TextInput
					multiline
					style={styles.inputSpace}
					placeholder="Comment"
					onChangeText={(text) => setComment(text)}
					value={comment}
				/>
				<Button title="confirm" onPress={handleComment} />
			</View>
		</View>
	);
}
