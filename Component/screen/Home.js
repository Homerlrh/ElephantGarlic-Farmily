import React, { useContext } from "react";
import { View, Text, Button, Alert } from "react-native";
import { logout } from "../../firebase/collection/readData";
import styles from "../styles";
import { AuthContext } from "../index";

export default function Home({ navigation }) {
	const authContext = useContext(AuthContext);

	const handleLogOut = () => {
		try {
			logout() ? authContext.setUser() : null;
		} catch (err) {
			Alert.alert(err);
		}
	};

	return (
		<View style={styles.container}>
			<Button
				title="+"
				onPress={() => {
					navigation.navigate("CreatePost");
				}}
			/>
			<Button
				title="All post"
				onPress={() => {
					navigation.navigate("AllPost");
				}}
			/>
			<Button title="Log out" onPress={handleLogOut} />
		</View>
	);
}
