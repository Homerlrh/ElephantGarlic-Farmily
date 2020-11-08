import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { chat } from "../../firebase/collection/readData";
import styles from "../styles";
export default function ChatScreen({ navigation }) {
	const [isReady, setReady] = useState(false);
	const [chats, setChats] = useState();
	useEffect(() => {
		setReady(false);
		(async () => {
			const chats = await chat();
			setChats(chats);
			setReady(true);
		})();
	}, []);

	const handler =
		isReady === false ? (
			<View style={styles.container}>
				<ActivityIndicator animating={!isReady} size="large" />
				<Text>Loading</Text>
			</View>
		) : (
			chats.map((chat) => (
				<TouchableOpacity
					key={chat.roomId}
					onPress={() => {
						navigation.navigate("DetailChat", { room: chat.roomId });
					}}
				>
					<View
						style={{
							borderColor: "#000",
							borderWidth: 1,
							borderStyle: "solid",
							width: 300,
							padding: 10,
						}}
					>
						<Text>User: {chat.otherUser.name}</Text>
						<Text>Message: {chat.latest.message}</Text>
					</View>
				</TouchableOpacity>
			))
		);

	return <View style={styles.container}>{handler}</View>;
}
