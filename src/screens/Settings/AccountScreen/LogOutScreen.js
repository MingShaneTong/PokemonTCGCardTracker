import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { signOut } from "firebase/auth";

import { auth } from "../../../api/firebase";

export default function SignUpScreen() {
	let navigation = useNavigation();

	const handleSignOut = () => {
		signOut(auth).then(
			cred => navigation.navigate("SettingsScreen")
		).catch(
			err => console.error("Sign Out Error: " + err.message)
		);
	}

	return (
		<View style={styles.container}>
            <Button style={styles.button} title="Log Out" onPress={handleSignOut} />
        </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});