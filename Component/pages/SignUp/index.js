import React, { useState, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import Button from "../../comps/Button";
import { AuthContext } from "../../index";
import { registerNewUser } from "../../../firebase/collection/writeData";

const styles = StyleSheet.create({
	signuppage: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
	},
	logoV: {
		width: 180,
		height: 80,
	},
	user: {
		width: 130,
		height: 130,
	},
	userInput: {},
	signupB: {
		width: 200,
	},
	signupBack: {
		alignSelf: "center",
		color: "#2775C9",
		fontWeight: "bold",
		fontSize: 15,
	},
	userinfo: {
		marginTop: 20,
		marginBottom: 10,
	},
	inputSpace: {
		marginBottom: 15,
		width: "80%",
		borderColor: "#000",
		borderRadius: 5,
		borderWidth: 1,
		paddingVertical: 8,
		paddingLeft: 5,
	},
});

const SignUp = ({ navigation }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const authContext = useContext(AuthContext);

	const handleHome = () => {
		navigation.navigate("Welcome");
	};

	const signUP = async () => {
		const data = {
			firstName,
			lastName,
			userName,
			email,
		};
		try {
			registerNewUser(email, password, confirmPassword, data).then((user) => {
				authContext.setUser(user);
			});
		} catch (err) {
			Alert.alert(err);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.signuppage}
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<Image source={require("./logoV.png")} style={styles.logoV} />
			<Image //Will use Expo ImagePicker API here instead, just need guidance for this part...
				source={require("./user.png")}
				style={styles.user}
			/>

			<TextInput
				style={styles.inputSpace}
				placeholder="ex: John"
				onChangeText={(text) => setFirstName(text)}
				value={firstName}
			/>

			<TextInput
				style={styles.inputSpace}
				placeholder="ex: Doe"
				onChangeText={(text) => setLastName(text)}
				value={lastName}
			/>

			<TextInput
				style={styles.inputSpace}
				placeholder="Username"
				onChangeText={(text) => setUserName(text)}
				value={userName}
			/>

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

			<TextInput
				style={styles.inputSpace}
				placeholder="Confirm Password"
				secureTextEntry
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
			/>

			<View style={styles.signupB}>
				<Button
					bgcolor="#00AC64"
					text="SIGN UP"
					handler={() => {
						signUP();
					}}
				/>
			</View>
			<TouchableOpacity onPress={handleHome}>
				<Text style={styles.signupBack}>BACK</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default SignUp;
