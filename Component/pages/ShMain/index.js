import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Header from "../../comps/Header";
import * as Location from "expo-location";
import {
	getPalaceAroundUser,
	getPlacePhoto,
	searchPlace,
} from "../../../mapAPI/apiConnect";
import { SlImage } from "../../comps";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "5%",
	},
	body: {
		paddingTop: "30%",
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
	},
	icon: {
		resizeMode: "contain",
		maxWidth: 25,
		maxHeight: 25,
		margin: 10,
	},
	shContainer: {
		maxWidth: "100%",
		minHeight: 50,
		maxHeight: 200,
		overflow: "hidden",
		marginBottom: 10,
		borderColor: "#000",
		borderWidth: 1,
		borderRadius: 15,
	},
	inner: {
		padding: 10,
	},
	icon2: {
		maxWidth: 20,
		maxHeight: 20,
		marginRight: 5,
	},
});

const ShMain = ({ navigation }) => {
	const [isReady, setReady] = useState(false);
	const [location, setLocation] = useState(null);
	const [slHouseList, setSLHouse] = useState();

	// useEffect(() => {
	// 	(async () => {
	// 		let { status } = await Location.requestPermissionsAsync();
	// 		if (status !== "granted") {
	// 			setErrorMsg("Permission to access location was denied");
	// 		}

	// 		let location = await Location.getCurrentPositionAsync({});
	// 		setLocation({
	// 			lon: location.coords.longitude,
	// 			lat: location.coords.latitude,
	// 		});
	// 		console.log(location);
	// 	})();
	// }, []);

	useEffect(() => {
		setReady(false);
		searchPlace("slaughterhouse").then((place) => {
			setSLHouse(place);
			setReady(true);
		});
	}, []);

	const handleShB = (location) => {
		navigation.navigate("detailSlaughter", {
			name: location.name,
			location: location.geometry.location,
			address: location.formatted_address,
		});
	};

	const allHouses =
		isReady === false
			? null
			: slHouseList.map((house) => (
					<TouchableOpacity
						key={house.place_id}
						onPress={() => handleShB(house)}
					>
						<View style={styles.shContainer}>
							{house.photos ? (
								<SlImage image={house.photos} />
							) : (
								<Image
									resizeMode="cover"
									style={{ maxWidth: "100%", height: 100 }}
									source={require("../../public/sh1.jpg")}
								/>
							)}
							<View style={styles.inner}>
								<Text style={{ fontSize: 18, fontWeight: "500" }}>
									{house.name}
								</Text>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Image
										style={styles.icon2}
										source={require("../../public/star.png")}
									/>
									<Text>{house.rating}</Text>
									<Text> {"( " + house.user_ratings_total + " )"} </Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
			  ));

	return isReady === false ? null : (
		<View style={styles.container}>
			<Header
				text="SlaughterHouse"
				iconRight={require("../../public/map.png")}
				iconLeft={require("../../public/back.png")}
				bottomColor="#2775C9"
				fuc1={() => {
					navigation.goBack();
				}}
			/>
			<View style={styles.body}>
				{/* this input is for testing pages only -- start */}
				<View style={styles.row}>
					<TextInput
						style={{
							height: 40,
							width: "60%",
							borderColor: "gray",
							borderWidth: 1,
							marginBottom: "6%",
							borderRadius: 5,
							textAlign: "center",
						}}
					>
						For testing, will fix later
					</TextInput>
					<Image
						source={require("../../public/search.png")}
						style={styles.icon}
					></Image>
				</View>
				{/* this input is for testing pages only -- end */}
				<ScrollView style={{ maxHeight: 600, paddingHorizontal: 10 }}>
					{allHouses}
				</ScrollView>
			</View>
		</View>
	);
};

export default ShMain;
