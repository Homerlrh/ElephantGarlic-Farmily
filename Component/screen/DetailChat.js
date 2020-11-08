import React, { useState, useContext, useEffect } from "react";
import { View, Button, TextInput } from "react-native";
import { insertChat } from "../../firebase/collection/writeData";

import styles from "../styles";

export default function DetailChat({ route, navigation }) {
	const [message, setMessage] = useState();
	const { room } = route.params;

	const handleSend = () => {
		(async () => {
			await insertChat(room, message);
		})();
	};

	return (
		<View style={styles.container}>
			<TextInput
				multiline
				style={styles.inputSpace}
				placeholder="Message"
				onChangeText={(text) => setMessage(text)}
				value={message}
			/>
			<Button title="send" onPress={handleSend} />
		</View>
	);
}
