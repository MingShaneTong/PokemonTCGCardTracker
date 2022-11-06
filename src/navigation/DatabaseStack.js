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
                header: ({ scene, previous, navigation }) => (
                    <Header scene={scene} previous={previous} navigation={navigation} />
                )
            }}
        >
            <Stack.Screen
                name="DatabaseScreen"
                component={DatabaseScreen}
                options={{ headerTitle: 'Database' }}
            />
            <Stack.Screen
                name="ExpansionSetScreen"
                component={ExpansionSetScreen}
                options={{ headerTitle: 'Expansion Set' }}
            />
        </Stack.Navigator>
    );
};