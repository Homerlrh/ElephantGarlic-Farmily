import React, { useState, useEffect } from "react";
import {
	Image,
	Text,
	TextInput,
	Alert,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import { navigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./createPost/ImageInputList";
import styles from "./styles";

import { getCurrentUser } from "../firebase/collection/readData";

export default function Home({ navigation }) {
	const [currentUser, setCurrentUser] = useState({});

	//post info
	const [postTitle, setpostTitle] = useState("");
	const [postDescription, setPostDescription] = useState("");
	const [imageUris, setImageUris] = useState([]);

	useEffect(() => {
		async function detectUser() {
			try {
				const user = await getCurrentUser();
				setCurrentUser(user);
			} catch (err) {
				Alert.alert(err);
			}
		}
		detectUser();
	}, [setCurrentUser]);

	useEffect(() => {
		const requestPermission = async () => {
			const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
			if (!granted) {
				Alert.alert("You need to enable permisssion to use this feature");
			}
		};
		requestPermission();
	}, []);

	const createPost = () => {
		console.log(`title ${postTitle} description ${postDescription}`);

		// const data = { title: postTitle, description: postDescription };
		// db.collection("post").doc(postTitle).set(data);
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
			<Button title="See user" onPress={createPost} />
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</KeyboardAvoidingView>
	);
}
