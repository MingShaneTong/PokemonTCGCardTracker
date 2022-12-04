import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from './Header'
import DatabaseScreen from '../screens/Database/DatabaseScreen';
import ExpansionSetScreen from '../screens/Database/ExpansionSetScreen';

const Stack = createStackNavigator();

export default function DatabaseStack() {
    return (
        <Stack.Navigator
            initialRouteName="DatabaseScreen"
            screenOptions={{
                header: (props) => <Header {...props} />
            }}
        >
            <Stack.Screen
                name="DatabaseScreen"
                component={DatabaseScreen}
                options={{ title: 'Database' }}
            />
            <Stack.Screen
                name="ExpansionSetScreen"
                component={ExpansionSetScreen}
                options={{ title: 'Expansion Set' }}
            />
        </Stack.Navigator>
    );
};