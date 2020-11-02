import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function ResetPassword({ navigation, route }) {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleReset = () => {};

	return (
		<View>
			<TextInput
				style={styles.inputSpace}
				placeholder="New Password"
				secureTextEntry
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>

			<TextInput
				style={styles.inputSpace}
				placeholder="Confirm New Password"
				secureTextEntry
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
			/>
		</View>
	);
}
