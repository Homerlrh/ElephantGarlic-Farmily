import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";

import TradePost from "../../comps/TradePost";
import Header from "../../comps/Header";
import { AuthContext } from "../..";
import { getLatestPost } from "../../../firebase/collection/readData";

const MpBoard = ({ navigation }) => {
	const [dpost, setDpost] = useState([]);
	const [isRefresh, setRefresh] = useState(false);

	const authContext = useContext(AuthContext);
	useEffect(() => {
		const discussion = authContext.posts.filter(
			(post) => post.postType === "market"
		);
		setDpost(discussion);
	}, [authContext.posts]);

	const handleRefresh = async () => {
		setRefresh(true);
		const p = await getLatestPost(dpost[0].createdAt);
		if (p.length > 0) {
			authContext.setPosts([...p, ...authContext.posts]);
		}
		setRefresh(false);
	};

	return (
		<View style={styles.container}>
			<Header
				text="Market"
				iconRight={require("../../public/pencil.png")}
				iconLeft={require("../../public/filter.png")}
				bottomColor="#00AC64"
				fuc2={() => {
					navigation.push("createPost", { type: "market" });
				}}
			/>
			<View style={styles.body}>
				<View style={styles.row}>
					<TextInput
						style={{
							height: 40,
							width: "60%",
							borderColor: "gray",
							borderWidth: 1,
							marginBottom: "6%",
							borderRadius: 5,
							textAlign: "center",
						}}
						placeholder="For testing, will fix later"
					/>

					<Image
						source={require("../../public/search.png")}
						style={styles.icon}
					/>
				</View>
				<FlatList
					data={dpost}
					extraData={dpost}
					keyExtractor={(post) => post.postId}
					renderItem={(post) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("marketDetail", {
									postId: post.item.postId,
								});
							}}
						>
							<TradePost
								txt1={post.item.title}
								txt3={post.item.description}
								imagePath={post.item.images[0]}
							/>
						</TouchableOpacity>
					)}
					refreshing={isRefresh}
					onRefresh={() => {
						handleRefresh();
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "10%",
	},
	body: {
		marginTop: "30%",
	},
	row: {
		flexDirection: "row",
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

export default MpBoard;
