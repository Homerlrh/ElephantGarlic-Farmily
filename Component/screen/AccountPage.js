import React, { useContext, useState } from "react";
import { View, Text, Button, Alert, TextInput } from "react-native";
import { changePassword, logout } from "../../firebase/collection/readData";
import styles from "../styles";
import { AuthContext } from "../index";
import { ButtonF } from "../comps";
import { auth, db, firebase } from "../../firebase/firebase";
export default function AccountPage({ navigation }) {
	const authContext = useContext(AuthContext);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const handleLogOut = () => {
		try {
			logout() ? authContext.setUser() : null;
		} catch (err) {
			Alert.alert(err);
		}
	};

	const handleChangePassword = () => {
		try {
			(async () => {
				await changePassword(password, confirmPassword);
				Alert.alert("password change, please log in again");
				handleLogOut();
			})();
		} catch (err) {
			Alert.alert(err);
		}
	};

	const handleUpdateUserInfo = () => {
		const data = {
			userName: "new userName",
			updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
		};
		db.collection("users")
			.doc(authContext.user.id)
			.update(data)
			.then(() => {
				Alert.alert("user info updated");
			});

		authContext.setUser({ userName: data.userName });
		console.log(authContext.user);
	};
	return (
		<View style={styles.container}>
			<Text></Text>
			<Button title="Log out" onPress={handleLogOut} />

			<View
				style={{
					alignItems: "center",
					marginTop: 50,
					width: "80%",
					borderWidth: 1,
					borderColor: "#000",
					padding: 5,
				}}
			>
				<TextInput
					secureTextEntry
					style={styles.inputSpace}
					placeholder="New Password"
					onChangeText={(text) => setPassword(text)}
					value={password}
				/>
				<TextInput
					secureTextEntry
					style={styles.inputSpace}
					placeholder="Confirm New Password"
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
				/>

				<ButtonF text="change password" behaviour={handleChangePassword} />
			</View>
			<ButtonF text="update user info" behaviour={handleUpdateUserInfo} />
		</View>
	);
}
