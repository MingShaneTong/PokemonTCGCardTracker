import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import DatabaseStack from "./DatabaseStack";
import CollectionScreen from "../screens/Collection/CollectionScreen";
import ScanScreen from "../screens/Scan/ScanScreen";
import SettingsScreen from '../screens/Settings/SettingsScreen'

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
	return (
        <NavigationContainer>
			<Tab.Navigator
				initialRouteName="Database"
			>
				<Tab.Screen
					name="Database"
					component={DatabaseStack}
					options={{
						tabBarIcon: "database",
					}}
				/>
				<Tab.Screen
					name="Collection"
					component={CollectionScreen}
					options={{
						tabBarIcon: "format-list-bulleted",
					}}
				/>
				<Tab.Screen
					name="Scan"
					component={ScanScreen}
					options={{
						tabBarIcon: "camera",
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={SettingsScreen}
					options={{
						tabBarIcon: "cog",
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
	