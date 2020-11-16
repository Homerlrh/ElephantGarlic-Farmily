import React from "react";
import { TextInput, StyleSheet } from "react-native";

const UserTextInput = ({ text, placeholder }) => {
	const [value, onChangeText] = React.useState({ text });

	return (
		<TextInput
			style={{
				height: 40,
				width: 272,
				borderColor: "#DADADA",
				borderWidth: 1,
				padding: 10,
			}}
			onChangeText={(text) => onChangeText(text)}
			value={value}
			placeholder={placeholder}
			placeholderTextColor="#000000"
		/>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#797",
		flex: 1,
	},
});
UserTextInput.defaultProps = {
	text: "yes",
	placeholder: "placeholder",
};
export default UserTextInput;
