import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";

// import MyPopUp from '../../comps/Popups';
import MyTab2 from "../../comps/Tab2";
import Header from "../../comps/Header";
import { AuthContext } from "../..";
import { db } from "../../../firebase/firebase";

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

const Favorite = ({ navigation }) => {
	const authContext = useContext(AuthContext);
	const [favDisc, setFavDisc] = useState([]);
	const [favMak, setFavMak] = useState([]);

	useEffect(() => {
		const unsubscribe = db
			.collection("users")
			.doc(authContext.user.id)
			.collection("favourite")
			.onSnapshot((snapshot) => {
				let changes = snapshot.docChanges();
				changes.forEach((change) => {
					if (change.type == "added") {
						const data = change.doc.data();
						if (data.postType == "discussion") {
							setFavDisc([...favDisc, data]);
						} else {
							setFavMak([...favMak, data]);
						}
					}
				});
			});
		return () => unsubscribe();
	}, []);

	return (
		<View style={styles.container}>
			<Header text="Favourite" bottomColor="#2775C9" />
			<View style={styles.body}>
				<MyTab2 text="Favorite Posts" post={favDisc} navigation={navigation} />
				<MyTab2 text="Favorite Items" post={favMak} navigation={navigation} />
				<MyTab2 text="Favorite Slaughterhouses" />
			</View>
		</View>
	);
};

export default Favorite;
