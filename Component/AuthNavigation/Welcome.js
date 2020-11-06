import React from "react";
import { View, Text, Image } from "react-native";
import { ButtonF } from "../comps";
import styles from "../styles";

export default function frontPage({ navigation }) {
	const handleLogin = () => {
		navigation.push("Login");
	};

	const handleSignUp = () => {
		navigation.push("Registration");
	};

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/Farmily.png")} style={styles.img} />
			<ButtonF text="Login" behaviour={handleLogin} />
			<Text style={{ fontSize: 15, fontWeight: "bold" }}>OR</Text>
			<ButtonF bgcolor="#00AC64" text="Sign up" behaviour={handleSignUp} />
		</View>
	);
}
