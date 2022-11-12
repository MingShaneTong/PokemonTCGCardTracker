import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header({ options, navigation, back }){//{ scene, previous, navigation }) {
	const title = options.headerTitle !== undefined
	  ? options.headerTitle
	  : options.title !== undefined
	  ? options.title
	  : scene.route.name;

	return (
		<Appbar.Header>
			{back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
			<Appbar.Content 
				title={ title }
			/>
		</Appbar.Header>
	);
};