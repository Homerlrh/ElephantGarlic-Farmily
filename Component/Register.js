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
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		navigation.navigate("Login");
	};

	const user = () => {
		console.log(`email: ${email} pass: ${password}`);
	};

	const handleSignup = () => {};

	return (
		<SafeAreaView>
			<KeyboardAwareScrollView>
				<TextInput
					placeholder="Email"
					onChangeText={(text) => setEmail(text)}
					value={email}
				/>

				<TextInput
					placeholder="Password"
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
					value={password}
				/>

				<Button
					title="sign up"
					onPress={() => {
						user();
					}}
				/>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}
