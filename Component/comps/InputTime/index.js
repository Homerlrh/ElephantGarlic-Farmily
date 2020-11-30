import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const InputTime = ({ dropdown, setTime }) => {
	const [isdrop, setDrop] = useState(false);
	const [t, sett] = useState("Time");

	const hourCont = { display: isdrop ? "flex" : "none" };

	useEffect(() => {
		setDrop(dropdown);
	}, [dropdown]);

	const obj = [
		{ time: "9:00am - 10:00am" },
		{ time: "10:00am - 11:00am" },
		{ time: "11:00am - 12:00pm" },
		{ time: "12:00am - 1:00pm" },
		{ time: "1:00am - 2:00pm" },
		{ time: "2:00am - 3:00pm" },
		{ time: "3:00am - 4:00pm" },
		{ time: "4:00am - 5:00pm" },
	];

	const timeSlots = obj.map((timeslot, index) => (
		<TouchableOpacity
			key={index}
			onPress={() => {
				setTime(timeslot.time);
				sett(timeslot.time);
			}}
		>
			<View style={styles.timeBlock}>
				<Text style={styles.time}>{timeslot.time}</Text>
			</View>
		</TouchableOpacity>
	));
	return (
		<View style={styles.container}>
			<View style={styles.timeContainer}>
				<View style={styles.label}>
					<Image
						source={require("../../public/TimeIcon.png")}
						style={styles.timeIcon}
					/>
					<Text style={styles.text}>{t}</Text>
				</View>
				<TouchableOpacity
					style={styles.hourCont}
					onPress={() => {
						setDrop(!isdrop);
					}}
				>
					<Image
						source={require("../../public/ArrowDown.png")}
						style={styles.arrow}
					/>
				</TouchableOpacity>
			</View>

			<View isdrop={isdrop} style={[styles.hourContainer, hourCont]}>
				{timeSlots}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		margin: 15,
		alignSelf: "stretch",
	},

	timeContainer: {
		backgroundColor: "#FFFFFF",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#DADADA",
		borderWidth: 2,
		borderRadius: 8,
		padding: 5,
		marginBottom: 10,
	},

	label: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},

	text: {
		color: "#000000",
		fontWeight: "600",
		fontSize: 16,
		padding: 5,
	},

	timeIcon: {
		width: 20,
		height: 20,
		margin: 5,
	},

	arrow: {
		width: 30,
		height: 30,
	},
	hourContainer: {
		backgroundColor: "#FFFFFF",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "stretch",
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: { width: 10, height: 0 },
		shadowOpacity: 0.8,
		shadowRadius: 1,
		elevation: 3,
	},
	time: {
		color: "#000000",
		fontWeight: "600",
		fontSize: 16,
		margin: 12,
	},

	timeBlock: {
		minWidth: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#D3D3D3",
		borderBottomWidth: 1.5,
		alignSelf: "stretch",
	},
});

InputTime.defaultProps = {
	dropdown: () => {},
};

export default InputTime;
