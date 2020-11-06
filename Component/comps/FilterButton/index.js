import { functions } from "firebase";
import React from "react";
import { View, Button } from "react-native";

export default function FilterButton({ name, setFilter }) {
	return <Button title={name} onPress={() => setFilter(name)} />;
}
