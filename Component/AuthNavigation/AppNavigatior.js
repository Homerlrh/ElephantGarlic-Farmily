import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Image } from "react-native";

import {
	Home,
	DetailPost,
	AllPost,
	AccountPage,
	//CreatePost,
	ChatScreen,
	DetailChat,
} from "../index";
import {
	Usermain,
	Forum,
	MarketPost,
	postDetail,
	marketDetail,
	CreatePost,
	AllShHouse,
	Profile,
	Favourite,
	Notification,
	messageUi,
	ShDetail,
	MyDiscussion,
	MyMarket,
} from "../pages";

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

const postNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="home"
				component={Usermain}
				options={{ title: "All Post" }}
			/>
			<Stack.Screen
				name="forum"
				component={Forum}
				options={{ title: "Forum" }}
			/>
			<Stack.Screen
				name="marketPost"
				component={MarketPost}
				options={{ title: "Market" }}
			/>
			<Stack.Screen
				name="discussionDetail"
				component={postDetail}
				options={{ title: "Disscusion" }}
			/>
			<Stack.Screen
				name="marketDetail"
				component={marketDetail}
				options={{ title: "Market" }}
			/>
			<Stack.Screen
				name="createPost"
				component={CreatePost}
				options={{ title: "create" }}
			/>
			<Stack.Screen
				name="slaughter"
				component={AllShHouse}
				options={{ title: "Slaughterhouse" }}
			/>
			<Stack.Screen
				name="detailSlaughter"
				component={ShDetail}
				options={{ title: "detailSlauterhouse" }}
			/>
		</Stack.Navigator>
	);
};

const ProfileNavifator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen
			name="ProfileScreen"
			component={Profile}
			options={{ title: "User Profile" }}
		/>
		<Stack.Screen
			name="MyDisc"
			component={MyDiscussion}
			options={{ title: "All Discussion post" }}
		/>
		<Stack.Screen
			name="MyMarket"
			component={MyMarket}
			options={{ title: "All Market post" }}
		/>
		<Stack.Screen
			name="createPost"
			component={CreatePost}
			options={{ title: "create" }}
		/>
		<Stack.Screen
			name="discussionDetail"
			component={postDetail}
			options={{ title: "Disscusion" }}
		/>
	</Stack.Navigator>
);

const ChatNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="AllChat"
				component={messageUi}
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
				component={postNavigator}
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
				component={Notification}
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
				component={ProfileNavifator}
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
				component={Favourite}
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
