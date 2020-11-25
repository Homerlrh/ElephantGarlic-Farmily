import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";

import LogoHeader from "../../comps/LogoHeader";
import MyTab from "../../comps/Tabs";
import Avatar from "../../comps/Avatar";
import UserTextInput from "../../comps/Inputs";
import { logout } from "../../../firebase/collection/readData";
import { AuthContext } from "../..";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	body: {
		position: "absolute",
		top: "15%",
	},

	logoheader: {
		top: "10%",
	},

	tabs: {
		alignItems: "flex-start",
	},
	Navi: {
		position: "absolute",
		top: 698,
	},
});

const Profile = () => {
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
			<LogoHeader
				style={styles.logoheader}
				logo={require("../../public/logo_h.png")}
			/>
			<View style={styles.body}>
				<View style={styles.avatar}>
					<Avatar
						profilePic={authContext.user.avatar}
						username={authContext.user.userName}
					/>
				</View>
				<View style={styles.tabs}>
					<MyTab text="View Profile" />
					<MyTab text="My discussion" />
					<MyTab text="My Market" />
					<MyTab text="Settings" />
					<MyTab text="Logout" onpress={handleLogOut} />
				</View>
			</View>
		</View>
	);
};

export default Profile;
