import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import DatabaseStack from "./DatabaseStack";
import CollectionStack from "./CollectionStack";
import ScanScreen from "../screens/Scan/ScanScreen";
import SettingsStack from './SettingsStack'

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
	return (
        <NavigationContainer>
			<Tab.Navigator initialRouteName="Database">
				<Tab.Screen
					name="Database"
					component={DatabaseStack}
					options={{
						tabBarIcon: "database",
					}}
				/>
				<Tab.Screen
					name="Collection"
					component={CollectionStack}
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
					component={SettingsStack}
					options={{
						tabBarIcon: "cog",
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
	