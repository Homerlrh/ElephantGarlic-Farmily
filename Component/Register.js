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

export default function Register({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");

	const handleLogin = () => {
		navigation.navigate("Login");
	};

	const user = () => {
		console.log(`email: ${email} pass: ${password}`);
	};

	const signUP = () => {
		if (password !== confirmPassword) {
			Alert.alert("Passwords don't match.");
			return;
		}

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid;
				const data = {
					id: uid,
					email,
					firstName,
				};
				const usersRef = db.collection("users");
				usersRef
					.doc(uid)
					.set(data)
					.then(() => {
						console.log("user created");
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
				placeholder="Name"
				onChangeText={(text) => setFirstName(text)}
				value={firstName}
			/>

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

			<TextInput
				style={styles.inputSpace}
				placeholder="Confirm Password"
				secureTextEntry
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
			/>

			<Button
				title="Signup"
				onPress={() => {
					signUP();
				}}
			/>
			<Text>
				Have an account?
				<Text onPress={handleLogin}>Log in</Text>
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
