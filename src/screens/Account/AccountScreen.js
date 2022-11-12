import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { Appbar, Provider } from 'react-native-paper';

export default function AccountScreen() {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"
		>
			<View style={styles.inputContainer}>
				<TextInput placeholder='Email' style={styles.input} />
				<TextInput placeholder='Password' style={styles.input} secureTextEntry />

			</View>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} title="Login" />
				<Button style={styles.button} title="Register" />
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