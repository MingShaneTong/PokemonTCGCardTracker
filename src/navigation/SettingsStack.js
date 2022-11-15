import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './Header'
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AccountScreen from '../screens/Settings/AccountScreen';

const Stack = createStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator
            initialRouteName="SettingsScreen"
            screenOptions={{
                header: (props) => <Header {...props} />
            }}
        >
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{ title: 'Settings' }}
            />
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{ title: 'Account' }}
            />
        </Stack.Navigator>
    );
};