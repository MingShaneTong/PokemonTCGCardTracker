import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, Provider } from 'react-native-paper';

export default function DatabaseScreen({ navigation }) {
	const openExpansionHandler = () => {
		navigation.navigate("ExpansionSetScreen");
	}
	
	return (
		<View>
			<Text>Database</Text>
			<Button onPress={openExpansionHandler}>Press the button</Button>
		</View>
	);
}
