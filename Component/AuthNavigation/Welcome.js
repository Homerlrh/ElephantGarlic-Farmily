import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../comps";
import styles from "../styles";

export default function FrontPage({ navigation }) {
	const handleLogin = () => {
		navigation.push("Login");
	};

	const handleSignUp = () => {
		navigation.push("Registration");
	};

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/Farmily.png")} style={styles.img} />
			<Button text="Login" handler={handleLogin} width="70%" />
			<Text style={{ fontSize: 15, fontWeight: "bold" }}>OR</Text>
			<Button
				bgcolor="#00AC64"
				text="Sign up"
				handler={handleSignUp}
				width="70%"
			/>
		</View>
	);
}
