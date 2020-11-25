import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { getPlacePhoto } from "../../../mapAPI/apiConnect";

export default function SlImage({ image }) {
	const [pic, setPic] = useState(null);

	useEffect(() => {
		getPlacePhoto(image).then((img) => {
			setPic(img.config.url);
		});
	}, []);

	return (
		<View>
			<Image source={{ uri: pic }} style={{ width: "100%", height: 100 }} />
		</View>
	);
}
