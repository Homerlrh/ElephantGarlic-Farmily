import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
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
	DetailMessage,
} from "../pages";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
		<Stack.Screen
			name="marketDetail"
			component={marketDetail}
			options={{ title: "Market" }}
		/>
	</Stack.Navigator>
);

const FavouriteNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="FavouriteHome"
				component={Favourite}
				options={{ title: "Favourite Screen" }}
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
		</Stack.Navigator>
	);
};

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
				component={DetailMessage}
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
				inactiveTintColor: "black",
				activeTintColor: "blue",
			}}
		>
			<Tab.Screen
				name="Home"
				component={postNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../../Component/comps/Navigation/home.png")}
							style={{ tintColor: color }}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="CreatePost"
				component={Notification}
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../../Component/comps/Navigation/notification.png")}
							style={{ tintColor: color }}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={ProfileNavifator}
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../../Component/comps/Navigation/profile.png")}
							style={{ tintColor: color }}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Favourite"
				component={FavouriteNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../../Component/comps/Navigation/favourite.png")}
							style={{ tintColor: color }}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Chat"
				component={ChatNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../../Component/comps/Navigation/chat.png")}
							style={{ tintColor: color }}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
