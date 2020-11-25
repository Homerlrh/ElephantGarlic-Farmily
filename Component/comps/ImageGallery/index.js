import React, { useState } from "react";
import {
	View,
	Image,
	ScrollView,
	Dimensions,
	Text,
	StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.5;

const defaultImage = [
	"https://images.pexels.com/photos/771146/pexels-photo-771146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	"https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	"https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	"https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

export default function ImageGallery({ grp }) {
	const [state, setState] = useState({ active: 0 });
	const images = grp ? grp : defaultImage;
	const change = ({ nativeEvent }) => {
		const slide = Math.ceil(
			nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
		);
		if (slide !== state.active) {
			setState({ active: slide });
		}
	};

	return (
		<View style={galleryStyles.container}>
			<ScrollView
				pagingEnabled
				horizontal
				onScroll={change}
				showsHorizontalScrollIndicator={false}
				style={galleryStyles.container}
			>
				{images.map((image, index) => (
					<Image
						key={index}
						source={{ uri: image }}
						style={galleryStyles.image}
					/>
				))}
			</ScrollView>

			<View style={galleryStyles.pagination}>
				{images.map((i, k) => (
					<Text
						key={k}
						style={
							k == state.active
								? galleryStyles.pagingActiveText
								: galleryStyles.pagingText
						}
					>
						⬤
					</Text>
				))}
			</View>
		</View>
	);
}

const galleryStyles = StyleSheet.create({
	container: {
		width,
		height,
	},
	image: {
		width,
		height,
		resizeMode: "contain",
	},
	pagination: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		alignSelf: "center",
	},
	pagingText: {
		fontSize: width / 30,
		color: "#888",
		margin: 5,
	},
	pagingActiveText: {
		fontSize: width / 30,
		color: "#fff",
		margin: 5,
	},
});
