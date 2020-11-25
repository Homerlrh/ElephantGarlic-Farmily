import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput({ type, imageUri, onChangeImage }) {
	const handleUploadPhoto = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) onChangeImage(result.uri);
		} catch (err) {
			Alert.alert(err.message);
		}
	};
	const handlePress = () => {
		if (!imageUri) handleUploadPhoto();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={!type ? styles.container : styles.round}>
				{!imageUri && (
					<MaterialCommunityIcons
						name={!type ? "camera" : type}
						size={50}
						color="black"
					/>
				)}
				{imageUri && (
					<Image
						source={{ uri: imageUri }}
						style={!type ? styles.image : styles.roundImage}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 15,
		height: 125,
		width: 125,
		justifyContent: "center",
	},
	image: {
		borderRadius: 15,
		width: 125,
		height: 125,
	},
	round: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 100,
		height: 125,
		width: 125,
		justifyContent: "center",
	},
	roundImage: {
		borderRadius: 100,
		width: 125,
		height: 125,
	},
});
