import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";

import LogoHeader from "../../comps/LogoHeader";
import MyTab from "../../comps/Tabs";
import Avatar from "../../comps/Avatar";
import { logout } from "../../../firebase/collection/readData";
import { AuthContext } from "../..";
import ScorllviewContext from "../../Context/ScorllviewContext";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	body: {
		paddingTop: "30%",
		paddingBottom: "10%",
	},
	tabs: {
		alignItems: "flex-start",
	},
});

const Profile = ({ navigation }) => {
	const authContext = useContext(AuthContext);

	const handleLogOut = () => {
		try {
			logout() ? authContext.setUser() : null;
		} catch (err) {
			Alert.alert(err);
		}
	};
	return (
		<ScorllviewContext>
			<View style={styles.container}>
				<LogoHeader logo={require("../../public/logo_h.png")} />
				<View style={styles.body}>
					<View style={styles.avatar}>
						<Avatar
							profilePic={authContext.user.avatar}
							username={authContext.user.userName}
						/>
					</View>
					<View style={styles.tabs}>
						<MyTab
							text="My discussion"
							onpress={() => {
								navigation.navigate("MyDisc");
							}}
						/>
						<MyTab
							text="My Market"
							onpress={() => {
								navigation.navigate("MyMarket");
							}}
						/>
						<MyTab text="Logout" onpress={handleLogOut} />
					</View>
				</View>
			</View>
		</ScorllviewContext>
	);
};

export default Profile;
