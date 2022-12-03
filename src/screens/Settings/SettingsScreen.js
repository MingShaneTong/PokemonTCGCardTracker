import React from "react";
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

import { auth } from "../../api/firebase";

export default function SettingsScreen({ navigation }) {
	let user = auth.currentUser;

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
