import React, { useEffect, useState, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	ActivityIndicator,
	TouchableOpacity,
	FlatList,
} from "react-native";

import MsgBox from "../../comps/MsgBox";
import Header from "../../comps/Header";
import { chat } from "../../../firebase/collection/readData";
import { db } from "../../../firebase/firebase";
import { AuthContext } from "../..";

const MessageMain = ({ navigation }) => {
	const [isReady, setReady] = useState(false);
	const [chatList, setChatList] = useState([]);
	const [isRefresh, setRefresh] = useState(false);

	const authContext = useContext(AuthContext);

	const userId = authContext.user.id;

	useEffect(() => {
		(async () => {
			setReady(false);
			try {
				const list = await chat();
				setChatList([...list]);
				setReady(true);
			} catch (err) {
				setReady(true);
			}
		})();
	}, []);

	// db.collection("chats").onSnapshot((snapshot) => {
	// 	let changes = snapshot.docChanges();
	// 	changes.forEach((change) => {
	// 		if (change.type == "modified") {
	// 			if (
	// 				change.doc.data().user1 == userId ||
	// 				change.doc.data().user2 == userId
	// 			) {
	// 				setChatList([...list, change.doc.data()]);
	// 			}
	// 		}
	// 	});
	// });

	const handleRefresh = async () => {
		setRefresh(true);
		console.log("refresh");
		setRefresh(false);
	};

	const list = chatList.map((chat) => (
		<TouchableOpacity
			key={chat.roomId}
			onPress={() => {
				navigation.navigate("DetailChat", { room: chat.roomId });
			}}
		>
			<MsgBox
				imagePath={chat.otherUser.avatar}
				txt1={chat.otherUser.name}
				txt2={chat.latest.message}
			/>
		</TouchableOpacity>
	));

	return isReady === false ? (
		<View style={styles.container}>
			<ActivityIndicator animating={!isReady} size="large" />
			<Text>Loading</Text>
		</View>
	) : (
		<View style={styles.container}>
			<Header text="Message" bottomColor="#C97064" />

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
					></Image>
				</View>

				<FlatList
					data={chatList}
					extraData={chatList}
					keyExtractor={(c) => c.roomId}
					renderItem={(c) => (
						<TouchableOpacity
							key={c.item.roomId}
							onPress={() => {
								navigation.navigate("DetailChat", { room: c.item.roomId });
							}}
						>
							<MsgBox
								imagePath={c.item.otherUser.avatar}
								txt1={c.item.otherUser.name}
								txt2={c.item.latest.message}
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
		marginTop: "5%",
	},
	body: {
		position: "absolute",
		top: "14%",
		alignItems: "center",
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
	MsgNavi: {
		position: "absolute",
		top: 698,
	},
});

export default MessageMain;
