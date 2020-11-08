import React, { useState, useContext } from "react";
import {
	Image,
	Text,
	TextInput,
	Alert,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import { getUseWithUID, login } from "../../firebase/collection/readData";
import { AuthContext } from "../index";
import styles from "../styles";

export default function Login({ navigation }) {
	const authContext = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegistration = () => {
		navigation.navigate("Registration");
	};

	const handleForgorPassword = () => {
		navigation.navigate("Reset");
	};

	const logIn = async () => {
		let user;
		try {
			user = await login(email, password);
			authContext.setUser(user);
		} catch (err) {
			Alert.alert(err);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<Image source={require("../../assets/Farmily.png")} style={styles.img} />
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
			<Text onPress={handleForgorPassword}>Forgot Password?</Text>

			<Text>
				Don't have an account?
				<Text onPress={handleRegistration}>Sign up</Text>
			</Text>
		</KeyboardAvoidingView>
	);
}
