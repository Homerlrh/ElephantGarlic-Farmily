import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import {
	CreatePost,
	Home,
	DetailPost,
	AllPost,
	AccountPage,
	ChatScreen,
	DetailChat,
} from "../index";

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

			<Tab.Screen
				name="Chat"
				component={ChatNavigator}
				options={{ title: "chat screen" }}
			/>

			<Tab.Screen
				name="AccountPage"
				component={AccountPage}
				options={{ title: "Account" }}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
