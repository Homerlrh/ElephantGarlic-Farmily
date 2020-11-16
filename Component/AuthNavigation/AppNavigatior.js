import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Image } from "react-native";

import {
	CreatePost,
	Home,
	DetailPost,
	AllPost,
	AccountPage,
	ChatScreen,
	DetailChat,
} from "../index";
import { Usermain } from "../pages";

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

// const AccountNavigator = ()=>{
// 	return(
// 		<Stack.Navigator>
// 		<Stack.Screen
// 			name="AllPost"
// 			component={AllPost}
// 			options={{ title: "All Post" }}
// 		/>
// 		<Stack.Screen
// 			name="DetailPost"
// 			component={DetailPost}
// 			options={{ title: "Detail Post" }}
// 		/>
// 	</Stack.Navigator>
// 	)
// }

const ChatNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="AllChat"
				component={ChatScreen}
				options={{ title: "All chats" }}
			/>
			<Stack.Screen
				name="DetailChat"
				component={DetailChat}
				options={{ title: "Detail Chat" }}
			/>
		</Stack.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				tabStyle: { alignItems: "center", justifyContent: "center" },
				inactiveTintColor: "lightgrey",
				activeTintColor: "blue",
			}}
		>
			<Tab.Screen
				name="Home"
				component={Usermain}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../../Component/comps/Navigation/home.png")}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="CreatePost"
				component={CreatePostNavigator}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../../Component/comps/Navigation/notification.png")}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={PostNavigator}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../../Component/comps/Navigation/profile.png")}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Favourite"
				component={ChatNavigator}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../../Component/comps/Navigation/favourite.png")}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Chat"
				component={ChatNavigator}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../../Component/comps/Navigation/chat.png")}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
