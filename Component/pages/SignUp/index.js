import React, { useState, useEffect, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
	ActivityIndicator,
} from "react-native";
import Button from "../../comps/Button";
import { AuthContext } from "../../index";
import { registerNewUser } from "../../../firebase/collection/writeData";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "../../createPost/ImageInput";
import { uploadFile } from "../../../firebase/storage";
import ScorllviewContext from "../../Context/ScorllviewContext";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
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
	avatar: {
		marginBottom: 20,
	},
});

const SignUp = ({ navigation }) => {
	const [isReady, setReady] = useState(true);
	const [imageUri, setImageUri] = useState();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const authContext = useContext(AuthContext);

	useEffect(() => {
		const requestPermission = async () => {
			const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
			if (!granted) {
				Alert.alert("You need to enable permisssion to use this feature");
			}
		};
		requestPermission();
	}, []);

	const handleHome = () => {
		navigation.navigate("Welcome");
	};

	const signUP = async () => {
		setReady(false);

		let avatar = "";
		if (imageUri) {
			avatar = await uploadFile(imageUri);
		}
		const data = {
			firstName,
			lastName,
			userName,
			email,
			avatar,
		};

		registerNewUser(email, password, confirmPassword, data)
			.then((user) => {
				authContext.setUser(user);
			})
			.catch((err) => {
				Alert.alert(err);
			});

		setReady(true);
	};

	return isReady === false ? (
		<View style={styles.container}>
			<ActivityIndicator animating={!isReady} size="large" />
			<Text>Loading</Text>
		</View>
	) : (
		<KeyboardAvoidingView
			style={styles.signuppage}
			behavior={Platform.OS == "ios" ? "padding" : null}
		>
			<ScorllviewContext>
				<Image source={require("./logoV.png")} style={styles.logoV} />
				<View style={styles.avatar}>
					<ImageInput
						type="account"
						imageUri={imageUri}
						onChangeImage={(uri) => setImageUri(uri)}
					/>
				</View>
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
			</ScorllviewContext>
		</KeyboardAvoidingView>
	);
};

export default SignUp;
