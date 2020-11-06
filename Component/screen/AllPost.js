import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { getAllPost } from "../../firebase/collection/readData";
import { FilterButton } from "../comps";

const filterPost = {
	Disscussion: (post) => post.postType === "disscussion",
	Market: (post) => post.postType === "market",
};

const postType = Object.keys(filterPost);

export default function AllPost({ navigation }) {
	const [isReady, setReady] = useState(false);
	const [postList, setPostList] = useState([]);
	const [filter, setFilter] = useState("Disscussion");

	useEffect(() => {
		setReady(false);
		(async () => {
			const b = await getAllPost();
			setPostList(b);
			setReady(true);
		})();
	}, [setPostList]);

	const handleDetailPost = (id) => {
		navigation.navigate("DetailPost", { postId: id });
	};

	const postScreen = postList
		.filter((type) => filterPost[filter](type))
		.map((post) => (
			<TouchableOpacity
				key={post.postId}
				style={styles.imageContainer}
				onPress={() => {
					handleDetailPost(post.postId);
				}}
			>
				<View>
					{/* <Image
						style={styles.tinyLogo}
						source={{
							uri: `${post.images[0]}`,
						}}
					/> */}
				</View>
				<View style={styles.textbox}>
					<Text style={styles.font}>Title: {post.postTitle}</Text>
					<Text style={styles.font}>
						Date: {new Date(post.createdTime.toDate()).toDateString()}
					</Text>
				</View>
			</TouchableOpacity>
		));

	const filterList = postType.map((name) => (
		<FilterButton key={name} name={name} setFilter={setFilter} />
	));

	return isReady === false ? null : (
		<ScrollView style={styles.container}>
			<View>{filterList}</View>
			{postScreen}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	imageContainer: {
		padding: 5,
		marginTop: 25,
		borderColor: "#000",
		borderWidth: 2,
		flexDirection: "row",
		width: "100%",
	},
	font: {
		fontSize: 22,
	},
	textbox: {
		marginLeft: 3,
	},
	tinyLogo: {
		width: 80,
		height: 80,
	},
});
