import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { storage } from "../../firebase/firebase";
import ImageInput from "./ImageInput";

export default function ImageInputList({
	imageUris = [],
	onRemoveImage,
	onAddImage,
}) {
	const scrollView = useRef();
	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => {
					scrollView.current.scrollToEnd();
				}}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginLeft: 10,
	},
});
