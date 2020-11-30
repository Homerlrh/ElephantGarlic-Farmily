import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, AppNavigator, AuthContext } from "./Component";

export default function App() {
	const [user, setUser] = useState();
	const [posts, setPosts] = useState([]);
	return (
		<AuthContext.Provider value={{ user, setUser, posts, setPosts }}>
			<NavigationContainer>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
