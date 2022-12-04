import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './Header'
import CollectionScreen from '../screens/Collection/CollectionScreen';
import { auth } from '../api/firebase';

const Stack = createStackNavigator();

export default function CollectionStack() {
	const user = auth.currentUser;
    if (!user) { return null; }

    return (
        <Stack.Navigator
            initialRouteName="CollectionScreen"
            screenOptions={{
                header: (props) => <Header {...props} />
            }}
        >
            <Stack.Screen
                name="CollectionScreen"
                component={CollectionScreen}
                options={{ title: 'Collection' }}
            />
        </Stack.Navigator>
    );
};