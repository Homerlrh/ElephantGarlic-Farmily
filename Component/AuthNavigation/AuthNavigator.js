import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import frontPage from "./Welcome";
import Login from "../screen/login";
import Register from "../screen/Register";

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Welcome" component={frontPage} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Registration" component={Register} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
