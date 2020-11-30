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
import UserTextInput from "../../comps/Inputs";
import { AuthContext } from "../../index";
import { login } from "../../../firebase/collection/readData";
import { ScrollView } from "react-native-gesture-handler";
import ScorllviewContext from "../../Context/ScorllviewContext";
const styles = StyleSheet.create({
	loginpage: {
		alignItems: "center",
		justifyContent: "center",
		paddingTop: "10%",
	},
	logo: {
		width: 300,
		height: 300,
	},
	forgetP: {
		color: "#2775C9",
		fontWeight: "bold",
		fontSize: 12,
		position: "absolute",
		left: 50,
	},
	loginInput: {
		marginTop: -15,
	},
	loginB: {
		width: 212,
		marginTop: 40,
	},
	loginBack: {
		marginTop: "10%",
		alignSelf: "center",
		color: "#2775C9",
		fontWeight: "bold",
		fontSize: 15,
	},
	loginInputBox: {
		marginBottom: 15,
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

const Login = ({ navigation }) => {
	const authContext = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleHome = () => {
		navigation.navigate("Welcome");
	};

	const logIn = async () => {
		let user;
		try {
			user = await login(email, password);
			authContext.setUser(user);
		} catch (err) {
			Alert.alert(err);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.loginpage}
			behavior={Platform.OS == "ios" ? "padding" : null}
		>
			<ScorllviewContext>
				<Image source={require("./logo.png")} style={styles.logo} />
				<TextInput
					style={styles.inputSpace}
					placeholder="Username or Email Address"
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
				<TouchableOpacity>
					<Text style={styles.forgetP}>Forgot Password?</Text>
				</TouchableOpacity>
				<View style={styles.loginB}>
					<Button
						style={styles.loginButton}
						text="LOGIN"
						bgcolor="#FDB833"
						handler={logIn}
					/>
					<TouchableOpacity onPress={handleHome}>
						<Text style={styles.loginBack}>BACK</Text>
					</TouchableOpacity>
				</View>
			</ScorllviewContext>
		</KeyboardAvoidingView>
	);
};

export default Login;
