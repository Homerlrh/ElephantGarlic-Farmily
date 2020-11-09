import React, { useState, useEffect, useContext } from "react";
import { TextInput, Alert, Button, KeyboardAvoidingView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "../createPost/ImageInputList";
import styles from "../styles";

import { AuthContext } from "../index";
import { createPost, uploadFiles } from "../../firebase/collection/writeData";

export default function CreatePost({ navigation }) {
	const [currentUser, setCurrentUser] = useState({});
	const authContext = useContext(AuthContext);

	//post info
	const [postTitle, setpostTitle] = useState("");
	const [postDescription, setPostDescription] = useState("");
	const [imageUris, setImageUris] = useState([]);

	useEffect(() => {
		const requestPermission = async () => {
			const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
			if (!granted) {
				Alert.alert("You need to enable permisssion to use this feature");
			}
		};
		requestPermission();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				//const user = await getCurrentUser();
				const user = authContext.user;
				setCurrentUser(user);
			} catch (err) {
				Alert.alert(err);
			}
		})();
	}, [setCurrentUser]);

	const handlecreatePost = async () => {
		try {
			let imageList = [];
			if (imageUris) {
				imageList = await uploadFiles(imageUris);
			}
			const id = await createPost(
				postTitle,
				postDescription,
				"disscussion",
				imageList
			);
			setTimeout(() => {
				navigation.navigate("DetailPost", { postId: id });
			}, 3000);
		} catch (err) {
			Alert.alert(err);
		}
	};

	const handleAdd = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<TextInput
				style={styles.inputSpace}
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
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>

			<Button title="Upload Post" onPress={handlecreatePost} />
		</KeyboardAvoidingView>
	);
}
