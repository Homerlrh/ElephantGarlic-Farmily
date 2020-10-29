import React, { useState } from "react";
import {
	Image,
	Text,
	TextInput,
	Alert,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import { registerNewUser } from "../firebase/collection/writeData";
import { styles } from "./styles";

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

	const signUP = async () => {
		const data = {
			email,
			firstName,
		};
		let user;
		try {
			user = await registerNewUser(email, password, confirmPassword, data);
			console.log(user);
		} catch (err) {
			Alert.alert(err);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<Image source={require("../assets/Farmily.png")} style={styles.img} />
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
