import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";
import { getAllUser } from "./firebase/collection/readData";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Register, Login } from "./Component";
import { useScreens } from "react-native-screens";

const Stack = createStackNavigator();
export default function App() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Registration" component={Register} />
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
