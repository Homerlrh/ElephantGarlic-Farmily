import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { getAllUser } from "./firebase/collection/readData";

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
