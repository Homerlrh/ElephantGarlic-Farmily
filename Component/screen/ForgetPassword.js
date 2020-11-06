import React from "react";
import { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import styles from "../styles";

import {
	getUserWithEmail,
	getUserWithUsername,
} from "../../firebase/collection/readData";

export default function ForgetPassword({ navigation }) {
	const [unknownU, setUnknownU] = useState("");

	const resetPassword = () => {
		getUserWithEmail(unknownU)
			.then((user) => {
				console.log(`Email ${user.id}`);
			})
			.catch(() => {
				getUserWithUsername(unknownU)
					.then((user) => {
						console.log(`username ${user.id}`);
					})
					.catch((err) => {
						Alert.alert(err);
					});
			});
	};

	return (
		<View>
			<TextInput
				style={styles.inputSpace}
				placeholder="Username or Email Address"
				onChangeText={(text) => setUnknownU(text)}
				value={unknownU}
			/>

			<Button title="Comfirm" />
		</View>
	);
}
