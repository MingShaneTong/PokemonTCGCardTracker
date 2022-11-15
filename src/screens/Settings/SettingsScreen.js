import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Provider, List, Button } from 'react-native-paper';

import { AuthContext } from '../../context/auth'

export default function SettingsScreen({ navigation }) {
	const { user } = useContext(AuthContext);

	const handleAccountPress = () => {
		navigation.navigate("AccountScreen");
	};

	return (
		<>
			{user ? <Text>{user.email}</Text>: null}
			<Button onPress={handleAccountPress}>Account</Button>
		</>
	);
}
