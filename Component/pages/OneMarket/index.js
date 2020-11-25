import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Text,
} from "react-native";

import MarketHeading from "../../comps/MarketHeading";
import PostBodyM from "../../comps/PostBodyM";
import Header from "../../comps/Header";
import Button from "../../comps/Button";
import { AuthContext } from "../..";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "10%",
	},
	contentContainer: {
		// flex:1,
		position: "absolute",
		top: "14%",
		// alignItems: 'center',
		// borderWidth:3,
		maxHeight: "100%",
	},
	row: {
		flexDirection: "row",
		// alignItems: "center"
		justifyContent: "center",
	},
	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		margin: 10,
	},
	Navi: {
		position: "absolute",
		top: 698,
	},
});

const OneMarket = ({ navigation, route }) => {
	const [isReady, setReady] = useState(false);
	const [detailPost, setDetail] = useState();
	const authContext = useContext(AuthContext);
	const { postId } = route.params;

	useEffect(() => {
		setReady(false);
		const p = authContext.posts.filter((post) => post.postId === postId);
		setDetail(p[0]);
		setReady(true);
	}, [setDetail]);

	return isReady === false ? (
		<View style={styles.container}>
			<ActivityIndicator animating={!isReady} size="large" />
			<Text>Loading</Text>
		</View>
	) : (
		<View style={styles.container}>
			<Header
				text="Market Place"
				iconRight={require("../../public/heart.png")}
				iconLeft={require("../../public/back.png")}
				bottomColor="#00AC64"
				fuc1={() => {
					navigation.goBack();
				}}
			/>
			<ScrollView style={styles.contentContainer}>
				<View>
					<MarketHeading />
					<PostBodyM txt1={detailPost.description} img={detailPost.images} />
				</View>
				<Button text="Contact the Seller" bgcolor="#00AC64" />
			</ScrollView>
		</View>
	);
};

export default OneMarket;
