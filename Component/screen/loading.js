import React from "react";
import { View, Text } from "react-native";

export default function loading(list) {
	return function withLoadingComponent({ isloading, ...props }) {
		if (!isloading) return <Component {...props} />;
		return <Text>Hold on</Text>;
	};
}
