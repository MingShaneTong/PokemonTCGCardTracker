import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { Appbar, Provider } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api/firebase'

export default function AccountScreen () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignUp = () => {
		console.log(email, password);
		createUserWithEmailAndPassword(
			auth, email, password
		).then(
			userCredentials => {
				const user = userCredentials.user;
				console.log(userCredentials.email);
			}
		).catch(
			error => alert(error.message)
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
					secureTextEntry 
					onChangeText={setPassword}
				/>

			</View>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} title="Login" />
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