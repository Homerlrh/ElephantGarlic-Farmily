import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import Header from "../../comps/Header";
import ImageGallery from "../../comps/ImageGallery";
import ShBusinessComp from "../../comps/ShBusinessComp";
import InputTime from "../../comps/InputTime";
import Button from "../../comps/Button";
import InputDate from "../../comps/InputDate";
import {
	createBooking,
	createSHBooking,
} from "../../../firebase/collection/writeData";

const styles = StyleSheet.create({
	ShBusinessPage: {
		marginTop: 40,
		flex: 1,
	},
	ShBusinImage: {
		marginTop: 30,
		marginBottom: 30,
	},
	ShBusinTag: {
		fontSize: 15,
		fontWeight: "bold",
		marginLeft: 20,
	},
	ShB_Descrip: {
		marginLeft: 20,
		marginTop: 20,
		marginRight: 25,
		lineHeight: 28,
	},
	ShBusinessCom: {},
	ShB_time: {
		width: 300,
		alignSelf: "center",
		marginTop: 30,
	},
	ShBCont: {
		position: "absolute",
		maxHeight: "50%",
		width: "100%",
		top: 80,
	},
	ShB_Navi: {
		position: "absolute",
		bottom: 0,
	},
	ShBusinessHead: {},
	ShBButton: {
		width: 220,
		justifyContent: "center",
		alignSelf: "center",
		marginBottom: 300,
	},
	ShB_date: {
		width: 300,
		alignSelf: "center",
		marginTop: 30,
	},
	map: {
		height: 250,
		width: 350,
		alignSelf: "center",
		marginTop: 40,
	},
});

const ShBusiness = ({ ShTag, ShDescrip, navigation, route }) => {
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const { name, location, address } = route.params;

	const handleBooking = async () => {
		await createSHBooking(name, date, time);
		Alert.alert("Booking created");
	};

	return (
		<View style={styles.ShBusinessPage}>
			<View style={styles.ShBusinessHead}>
				<Header
					text="Slaughterhouse"
					bottomColor="#2775C9"
					iconLeft={require("../../comps/Header/arrowleft.png")}
					iconRight={require("../../public/heart.png")}
					fuc1={() => {
						navigation.goBack();
					}}
				/>
			</View>
			<ScrollView style={styles.ShBCont}>
				<View style={styles.ShBusinessCom}>
					<ShBusinessComp NameText={name} />
				</View>
				<View>
					<Text>Address: {address}</Text>
				</View>
				<View style={styles.ShBusinImage}>
					<ImageGallery />
				</View>
				<Text style={styles.ShBusinTag}>{ShTag}</Text>
				<Text style={styles.ShB_Descrip}>{ShDescrip}</Text>
				<View style={styles.ShB_Map}></View>
				<MapView
					provider={PROVIDER_GOOGLE} // remove if not using Google Maps
					style={styles.map}
					region={{
						latitude: location.lat,
						longitude: location.lng,
						latitudeDelta: 0.055,
						longitudeDelta: 0.0121,
					}}
				>
					<Marker
						coordinate={{
							latitude: location.lat,
							longitude: location.lng,
						}}
					/>
				</MapView>
				<View>
					<View style={styles.ShB_date}>
						<InputDate setDate={setDate} />
					</View>
					<View style={styles.ShB_time}>
						<InputTime setTime={setTime} />
					</View>
				</View>
				<View style={styles.ShBButton}>
					<Button text="BOOKING" bgcolor="#2775C9" handler={handleBooking} />
				</View>
			</ScrollView>
		</View>
	);
};

ShBusiness.defaultProps = {
	ShTag: "#Default",
	ShDescrip: "Default Slaughterhouse Business Descriptions",
};

export default ShBusiness;
