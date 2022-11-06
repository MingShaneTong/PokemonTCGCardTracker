import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header({ scene, previous, navigation }) {
	// const { options } = scene.descriptor;
	const title = "Title";
	// options.headerTitle !== undefined
	//   ? options.headerTitle
	//   : options.title !== undefined
	//   ? options.title
	//   : scene.route.name;

	console.log(previous);

	return (
		<Appbar.Header>
			{previous ? 
				<Appbar.BackAction onPress={ navigation.pop }/> : <></> 
			}
			<Appbar.Content 
				title={ title } 
				style={{ alignItems: 'center' }}
			/>
		</Appbar.Header>
	);
};