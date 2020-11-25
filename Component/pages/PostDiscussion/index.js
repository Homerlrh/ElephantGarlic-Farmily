import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	TextInput,
	Text,
	ActivityIndicator,
	Button,
	KeyboardAvoidingView,
	Alert,
} from "react-native";

// import DiscussionHeading from '../../comps/DiscussionHeading';
import Header from "../../comps/Header";
import UserTextInput from "../../comps/Inputs";
import ContInput from "../../comps/ContInput";
import { AuthContext } from "../..";

import {
	createPost,
	uploadFiles,
} from "../../../firebase/collection/writeData";

import * as ImagePicker from "expo-image-picker";
import ImageInputList from "../../createPost/ImageInputList";
import { getPostById } from "../../../firebase/collection/readData";
import { db } from "../../../firebase/firebase";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "10%",
	},

	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		margin: 10,
	},
	midcont: {
		marginTop: 20,
		position: "absolute",
		top: "10%",
		alignItems: "center",
	},
	continput: {
		marginTop: 80,
	},
	userinput: {
		marginBottom: 40,
	},
	Navi: {
		position: "absolute",
		top: 698,
	},
	titleSpace: {
		marginTop: 12,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 10,
		minWidth: "80%",
		fontSize: 15,
		padding: 6,
	},
	inputSpace: {
		marginTop: 12,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 10,
		minWidth: "80%",
		height: "80%",
		fontSize: 15,
		padding: 6,
	},
});

const PostDiscussion = ({ route, navigation }) => {
	const [isReady, setReady] = useState(true);
	const [imageUris, setImageUris] = useState([]);
	const [postTitle, setpostTitle] = useState("");
	const [postDescription, setPostDescription] = useState("");
	const [price, setPrice] = useState("");

	const authContext = useContext(AuthContext);

	const { type } = route.params;

	useEffect(() => {
		const requestPermission = async () => {
			const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
			if (!granted) {
				Alert.alert("You need to enable permisssion to use this feature");
			}
		};
		requestPermission();
	}, []);

	const handleAdd = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};

	const handleGoBack = () => {
		navigation.goBack();
	};
	const handlecreatePost = async () => {
		setReady(false);
		try {
			let imageList = [];
			if (imageUris) {
				imageList = await uploadFiles(imageUris);
			}

			const data = price
				? {
						title: postTitle,
						description: postDescription,
						postType: type,
						images: imageList,
						current: { id: authContext.user, id: authContext.user.userName },
						price,
				  }
				: {
						title: postTitle,
						description: postDescription,
						postType: type,
						images: imageList,
						current: { id: authContext.user, id: authContext.user.userName },
				  };
			await createPost(data);
			navigation.goBack();
		} catch (err) {
			console.log(err);
			Alert.alert(err);
		}
	};

	db.collection("posts")
		.orderBy("createdAt", "desc")
		.limit(1)
		.onSnapshot((snapshot) => {
			let changes = snapshot.docChanges();
			changes.forEach((change) => {
				if (change.type == "modified") {
					//console.log(change.doc.data());
					authContext.setPosts([change.doc.data(), ...authContext.posts]);
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
				text="Create Post"
				iconRight={require("../../public/msgsent.png")}
				iconLeft={require("../../public/back.png")}
				bottomColor={type == "discussion" ? "#FDB833" : "#00AC64"}
				fuc1={handleGoBack}
				fuc2={handlecreatePost}
			/>
			<View style={styles.midcont}>
				<View style={styles.userinput}>
					<TextInput
						style={styles.titleSpace}
						placeholder="Title"
						onChangeText={(text) => setpostTitle(text)}
						value={postTitle}
					/>
					<TextInput
						multiline
						style={styles.inputSpace}
						placeholder="Description"
						onChangeText={(text) => setPostDescription(text)}
						value={postDescription}
					/>

					{type == "market" && (
						<TextInput
							style={styles.titleSpace}
							placeholder="$$ Price"
							onChangeText={(text) => setPrice(text)}
							value={price}
						/>
					)}
				</View>

				<ImageInputList
					imageUris={imageUris}
					onAddImage={handleAdd}
					onRemoveImage={handleRemove}
				/>
			</View>
		</View>
	);
};

export default PostDiscussion;
