import React, { useEffect, useState, useRef, useContext } from "react";
import {
	View,
	Text,
	ScrollView,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
} from "react-native";
import { AuthContext } from "../..";
import ChatBubble from "../../comps/Chat";
import Header from "../../comps/Header";
import { db } from "../../../firebase/firebase";
import { insertChat } from "../../../firebase/collection/writeData";

export default function OpenMessage({ navigation, route }) {
	const authContext = useContext(AuthContext);
	const currentUser = authContext.user.id;
	const { room } = route.params;

	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		const unsubscribe = db
			.collection("chats")
			.doc(room)
			.collection("message")
			.orderBy("createdAt", "asc")
			.onSnapshot((snapshot) => {
				let b = [];
				snapshot.forEach((x) => {
					b = [...b, x.data()];
				});
				setMessages(b);
			});
		return () => unsubscribe();
	}, []);

	const handleInsert = async () => {
		if (message != "") {
			await insertChat(room, message);
			setMessage("");
		}
	};

	const scrollView = useRef();
	const title = (
		<View style={styles.title}>
			<View
				style={{ flexDirection: "row", alignItems: "center", flexGrow: 0.5 }}
			>
				<Image
					style={styles.titleicon}
					source={require("../../public/tractor1.png")}
				/>
				<Text style={{ fontSize: 25 }}>Title</Text>
			</View>
			<TouchableOpacity>
				<Image
					style={styles.icon}
					source={require("../../public/arrowRight.png")}
				/>
			</TouchableOpacity>
		</View>
	);

	const chat = [...messages].map((message) =>
		message.sendUser == currentUser ? (
			<View style={{ alignItems: "flex-end" }} key={messages.sendUser}>
				<ChatBubble msg={message.message} background="#c97064" />
			</View>
		) : (
			<View style={{ alignItems: "flex-start" }} key={messages.sendUser}>
				<ChatBubble msg={message.message} background="#DEDEDE" />
			</View>
		)
	);

	const send = (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				maxHeight: 35,
				marginTop: 5,
			}}
		>
			<TouchableOpacity>
				<Image
					style={styles.icon}
					source={require("../../public/PlusWithBlack.png")}
				/>
			</TouchableOpacity>
			<TextInput
				multiline
				style={styles.textInput}
				placeholder="Aa"
				onChangeText={(text) => {
					setMessage(text);
				}}
				value={message}
			/>
			<TouchableOpacity onPress={handleInsert}>
				<Image style={styles.send} source={require("../../public/send.png")} />
			</TouchableOpacity>
		</View>
	);

	return (
		<View style={styles.container}>
			<Header
				text="Message"
				iconLeft={require("../../public/back.png")}
				iconRight="none"
				bottomColor="#C97064"
				fuc1={() => {
					navigation.goBack();
				}}
			/>
			<View style={styles.body}>
				{title}
				<View>
					<ScrollView
						style={{
							minWidth: "100%",
							padding: 10,
						}}
						ref={scrollView}
						onContentSizeChange={() => {
							scrollView.current.scrollToEnd();
						}}
					>
						{chat}
					</ScrollView>
					{send}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: "10%",
	},
	body: {
		alignItems: "center",
		marginTop: 50,
		maxHeight: "100%",
		paddingBottom: "55%",
	},
	title: {
		marginTop: "20%",
		minWidth: "100%",
		maxHeight: 80,
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	textInput: {
		minWidth: "70%",
		height: "100%",
		fontSize: 15,
		borderRadius: 18,
		paddingLeft: 15,
		borderColor: "grey",
		borderWidth: 1,
	},
	titleicon: { resizeMode: "contain", maxWidth: 50, maxHeight: 50, margin: 10 },
	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		margin: 10,
	},
	send: {
		resizeMode: "contain",
		maxWidth: 35,
		maxHeight: 30,
		margin: 10,
	},
});
