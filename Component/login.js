import React, { useState } from "react";
import {
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Alert,
	Button,
	SafeAreaView,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase, db } from "../firebase/firebase";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegistration = () => {
		navigation.navigate("Registration");
	};

	const user = () => {
		console.log(`email: ${email} pass: ${password}`);
	};

	const logIn = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid;
				const usersRef = db.collection("users");
				usersRef
					.doc(uid)
					.get()
					.then((userDocument) => {
						if (!userDocument.exists) {
							Alert.alert("User does not exist anymore.");
							return;
						}
						const user = userDocument.data();
						Alert.alert(user.firstName);

						//wat u gonna do
						//navigation.navigate("Home", { user });
					})
					.catch((error) => {
						Alert.alert(error.message);
					});
			})
			.catch((error) => {
				Alert.alert(error.message);
			});
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<Image source={require("../assets/Farmily.png")} />
			<TextInput
				style={styles.inputSpace}
				placeholder="Email"
				onChangeText={(text) => setEmail(text)}
				value={email}
			/>

			<TextInput
				style={styles.inputSpace}
				placeholder="Password"
				secureTextEntry
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>

			<Button
				title="Lon in"
				onPress={() => {
					logIn();
				}}
			/>
			<Text>
				Don't have an account?
				<Text onPress={handleRegistration}>Sign up</Text>
			</Text>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	inputSpace: {
		marginBottom: 15,
		width: "80%",
		borderColor: "#000",
		borderRadius: 5,
		borderWidth: 1,
		paddingVertical: 8,
		paddingLeft: 5,
	},
});
