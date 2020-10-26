import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { getAllUser } from "./firebase/collection/readData";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "./Component/Register";
export default function App() {
	const console = () => {
		getAllUser();
	};

	return (
		<View style={styles.container}>
			<Button
				onPress={console}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			<Register />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
