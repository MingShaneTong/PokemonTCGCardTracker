import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../api/firebase"

export default function SignUpScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let navigation = useNavigation();

	const handleSignUp = () => {
		createUserWithEmailAndPassword(
			auth, email, password
		).then(
			cred => navigation.navigate("SettingsScreen")
		).catch(
			err => console.error(err.message)
		);
	}

	const handleLogIn = () => {
		signInWithEmailAndPassword(
			auth, email, password
		).then(
			cred => navigation.navigate("SettingsScreen")
		).catch(
			err => console.error(err.message)
		);
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"
		>
			<View style={styles.inputContainer}>
				<TextInput 
					placeholder='Email' 
					style={styles.input} 
					onChangeText={setEmail}
				/>
				<TextInput 
					placeholder='Password' 
					style={styles.input} 
					onChangeText={setPassword}
					secureTextEntry
				/>

			</View>
			<View style={styles.buttonContainer}>
				<Button 
					title="Login" 
					style={styles.button} 
					onPress={handleLogIn}
				/>
				<Button 
					title="Register" 
					style={styles.button} 
					onPress={handleSignUp} 
				/>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});