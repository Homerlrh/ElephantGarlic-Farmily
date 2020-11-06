import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigator, AppNavigator, AuthContext } from "./Component";

export default function App() {
	const [user, setUser] = useState();

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
