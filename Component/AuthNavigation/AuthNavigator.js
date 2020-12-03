import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FrontPage from "./Welcome";
import Login from "../pages/Login";
import Register from "../pages/SignUp";

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Welcome" component={FrontPage} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Registration" component={Register} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
