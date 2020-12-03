import React, { createContext } from "react";
import { ScrollView } from "react-native";

export const scrollContext = createContext();
export default function ScorllviewContext({ children }) {
	return (
		<scrollContext.Provider>
			<ScrollView
				style={{ height: "100%", minWidth: "100%" }}
				contentContainerStyle={{
					flexGrow: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{children}
			</ScrollView>
		</scrollContext.Provider>
	);
}
