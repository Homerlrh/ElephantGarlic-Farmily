import React, { useState, useEffect, useContext } from "react";
import {
	View,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ForumPost from "../../comps/ForumPost";
import LogoHeader from "../../comps/LogoHeader";
import TradePost from "../../comps/TradePost";
import Underlined from "../../comps/Underlined";
import FilterButton from "../../comps/FilterButton";
import Button from "../../comps/Button";
import { getAllPost } from "../../../firebase/collection/readData";

import { AuthContext } from "../../index";
import ScorllviewContext from "../../Context/ScorllviewContext";
const filterPost = {
	Discussion: (post) => post.postType === "discussion",
	Market: (post) => post.postType === "market",
};

const postType = Object.keys(filterPost);

export default function UserMain({ navigation }) {
	//no use for now
	const [isReady, setReady] = useState(false);

	// initial state is Discussion
	const [filter, setFilter] = useState("Discussion");
	const [currentSelection, setCurrentSelection] = useState("Discussion");

	const authContext = useContext(AuthContext);

	useEffect(() => {
		setReady(false);
		(async () => {
			const b = await getAllPost();
			authContext.setPosts(b);
			setReady(true);
		})();
	}, []);

	const filterButton = postType.map((type) => {
		return (
			<FilterButton
				key={type}
				text={type}
				type={type}
				setFilter={setFilter}
				setCurrentSelection={setCurrentSelection}
				currentSelection={currentSelection}
			/>
		);
	});

	const handleDiss = () => {
		navigation.navigate("forum");
	};

	const handleMark = () => {
		navigation.navigate("marketPost");
	};

	const handleSh = () => {
		navigation.navigate("slaughter");
	};

	const postGroup = authContext.posts
		.filter((type) => filterPost[filter](type))
		.map((post) => {
			if (post.postType === "discussion") {
				return (
					<TouchableOpacity
						key={post.postId}
						onPress={() => {
							navigation.navigate("discussionDetail", { postId: post.postId });
						}}
					>
						<ForumPost
							maxheight={100}
							txt1={post.title}
							txt2={post.description}
							imagePath={post.images[0]}
						/>
					</TouchableOpacity>
				);
			} else {
				return (
					<TouchableOpacity
						key={post.postId}
						onPress={() => {
							navigation.navigate("marketDetail", { postId: post.postId });
						}}
					>
						<TradePost
							maxheight={100}
							txt1={post.title}
							txt2={post.price}
							txt3={post.description}
							imagePath={post.images[0]}
						/>
					</TouchableOpacity>
				);
			}
		});

	return isReady === false ? null : (
		<ScorllviewContext>
			<View>
				<LogoHeader logo={require("../../public/logo_h.png")} />
				<View style={styles.body}>
					<View style={styles.filterGroup}>{filterButton}</View>
					<ScrollView
						style={
							filter == "Discussion" ? styles.allPostBody : styles.allPostBody2
						}
					>
						{postGroup}
					</ScrollView>

					<Button
						text="MORE"
						bgcolor={filter == "Discussion" ? "#FDB833" : "#00AC64"}
						width="70%"
						handler={filter == "Discussion" ? handleDiss : handleMark}
					/>
					<View
						style={{
							minWidth: "100%",
							alignItems: "center",
							flexDirection: "row",
						}}
					>
						<TouchableOpacity onPress={handleSh}>
							<Underlined text="Slaughterhouses" />
						</TouchableOpacity>

						<Image
							style={styles.icon}
							source={require("../../public/forward.png")}
						/>
					</View>
				</View>
			</View>
		</ScorllviewContext>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	heading: {
		position: "absolute",
		top: 0,
		height: 100,
		minWidth: "100%",
		borderColor: "lightgrey",
		borderBottomWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		paddingTop: "30%",
		alignItems: "center",
	},
	filterGroup: {
		minWidth: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	allPostBody: {
		marginTop: 20,
		borderColor: "#FDB833",
		borderWidth: 3,
		width: "90%",
		borderRadius: 10,
		height: 400,
	},
	allPostBody2: {
		marginTop: 20,
		borderColor: "#00AC64",
		borderWidth: 3,
		width: "90%",
		borderRadius: 10,
		height: 400,
	},
	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		marginLeft: "-5%",
	},
	Navi: {
		position: "absolute",
		top: 698,
	},
	useMainB: {
		width: 212,
	},
	underline1: {
		borderBottomColor: "yellow",
		borderBottomWidth: 3,
	},
	underline2: {
		borderBottomColor: "green",
		borderBottomWidth: 3,
	},
});
