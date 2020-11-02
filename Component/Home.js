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
import { uploadFile } from "../firebase/storage";

import { db } from "../firebase/firebase";

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

	const getAllUploadImage = async () => {
		let imagesURL = [...imageUris].map(async (imageUri) => {
			return uploadFile(imageUri).then(async (data) => {
				return data;
			});
		});
		return Promise.all(imagesURL);
	};

	const createPost = async () => {
		const imageList = await getAllUploadImage();
		const data = {
			postTitle,
			postDescription,
			images: imageList,
		};
		db.collection("post")
			.add(data)
			.then((doc) => {
				console.log("ID: ", doc.id);
			})
			.catch((error) => {
				console.log(error);
			});
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
			<Button title="Upload Photo" onPress={createPost} />
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</KeyboardAvoidingView>
	);
}
