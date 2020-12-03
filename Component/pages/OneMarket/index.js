import React, { useState, useEffect, useContext } from "react";
import {
	Modal,
	View,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Text,
	Alert,
	TouchableHighlight,
	TextInput,
	TouchableOpacity,
} from "react-native";

import MarketHeading from "../../comps/MarketHeading";
import PostBodyM from "../../comps/PostBodyM";
import Header from "../../comps/Header";
import Button from "../../comps/Button";
import { AuthContext } from "../..";
import {
	createChatRoom,
	favouritePost,
	insertChat,
} from "../../../firebase/collection/writeData";

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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		minWidth: "100%",
		height: "50%",
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	inputSpace: {
		marginBottom: 15,
		minWidth: "80%",
		borderColor: "#000",
		borderRadius: 5,
		borderWidth: 1,
		paddingVertical: 8,
		paddingLeft: 5,
	},
});

const OneMarket = ({ navigation, route }) => {
	const [isReady, setReady] = useState(false);
	const [detailPost, setDetail] = useState();
	const [date, setDate] = useState();
	const [modalVisible, setModalVisible] = useState(false);
	const [message, setMessage] = useState();
	const authContext = useContext(AuthContext);
	const { postId } = route.params;

	useEffect(() => {
		setReady(false);
		const p = authContext.posts.filter((post) => post.postId === postId);
		setDetail(p[0]);
		const d = p[0].createdAt.toDate().toString().split(" ");
		setDate(`${d[1]} ${d[2]} ${d[3]}`);
		setReady(true);
	}, [setDetail]);

	const handleFavouritePost = async () => {
		try {
			await favouritePost(authContext.user.id, detailPost);
			Alert.alert("Liked");
		} catch (err) {
			console.log(err);
		}
	};

	const handleCreateChatRoom = async (sendUser, msg) => {
		if (sendUser != authContext.user.id) {
			createChatRoom(sendUser).then((id) => {
				insertChat(id, msg).then(() => {
					setModalVisible(!modalVisible);
				});
			});
		} else {
			Alert.alert("Can't chat with this customer");
		}
	};

	const modal = (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View
						style={{
							minWidth: "100%",
							flexDirection: "row",
							justifyContent: "flex-end",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text style={{ fontSize: 30 }}>X</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: "5%" }}>
						<TextInput
							style={styles.inputSpace}
							placeholder="Message"
							onChangeText={(text) => setMessage(text)}
							value={message}
						/>
						<TouchableOpacity
							style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
							onPress={() =>
								handleCreateChatRoom(detailPost.CreatedBy.id, message)
							}
						>
							<Text style={styles.textStyle}>Send the first message</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);

	return isReady === false ? (
		<View style={styles.container}>
			<ActivityIndicator animating={!isReady} size="large" />
			<Text>Loading</Text>
		</View>
	) : (
		<View style={styles.container}>
			<Header
				text="Marketplace"
				iconRight={require("../../public/heart.png")}
				iconLeft={require("../../public/back.png")}
				bottomColor="#00AC64"
				fuc1={() => {
					navigation.goBack();
				}}
				fuc2={handleFavouritePost}
			/>
			<ScrollView style={styles.contentContainer}>
				<View>
					<MarketHeading
						txt1={detailPost.title}
						txt2={`$ ${detailPost.price}`}
						txt3={detailPost.CreatedBy.name}
						txt4={date}
						imagePath={authContext.user.avatar}
					/>
					<PostBodyM txt1={detailPost.description} img={detailPost.images} />
				</View>
				{modal}
				<Button
					text="Contact the Seller"
					bgcolor="#00AC64"
					handler={() => handleCreateChatRoom(detailPost.CreatedBy.id)}
					handler={() => {
						setModalVisible(!modalVisible);
					}}
				/>
			</ScrollView>
		</View>
	);
};

export default OneMarket;
