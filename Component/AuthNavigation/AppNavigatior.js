import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { CreatePost, Reset, Home, DetailPost, AllPost } from "../index";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CreatePostNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="CreatePost"
				component={CreatePost}
				options={{ title: "Create Post" }}
			/>
			<Stack.Screen
				name="DetailPost"
				component={DetailPost}
				options={{ title: "Detail Post" }}
			/>
		</Stack.Navigator>
	);
};

const PostNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="AllPost"
				component={AllPost}
				options={{ title: "All Post" }}
			/>
			<Stack.Screen
				name="DetailPost"
				component={DetailPost}
				options={{ title: "Detail Post" }}
			/>
		</Stack.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />

			<Tab.Screen
				name="CreatePost"
				component={CreatePostNavigator}
				options={{ title: "Create Post" }}
			/>

			<Tab.Screen
				name="AllPost"
				component={PostNavigator}
				options={{ title: "All Post" }}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
