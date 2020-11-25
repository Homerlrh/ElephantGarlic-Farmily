import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	ScrollView,
} from "react-native";

// import MyPopUp from '../../comps/Popups';
import MyTab2 from "../../comps/Tab2";
import Header from "../../comps/Header";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: "5%",
	},
	body: {
		position: "absolute",
		top: "10%",
		alignItems: "center",
	},
	Navi: {
		position: "absolute",
		top: 698,
	},
});

const Favorite = () => {
	return (
		<View style={styles.container}>
			<Header
				text="Favorite"
				// iconRight={require('../../public/pencil.png')}
				bottomColor="#2775C9"
			/>
			<View style={styles.body}>
				<MyTab2 text="Favorite Posts" />
				<MyTab2 text="Favorite Items" />
				<MyTab2 text="Favorite Slaughterhouses" />
			</View>
		</View>
	);
};

export default Favorite;
