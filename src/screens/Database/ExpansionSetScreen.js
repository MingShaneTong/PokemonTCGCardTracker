import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Provider } from 'react-native-paper';

export default class ExpansionSetScreen extends React.Component {
	constructor(props) {
		super(props);
		this.set = props.route.params;
	}

	componentDidMount() {
		// set title of the header
		this.props.navigation.setOptions({
			title: this.set.name
		});
	}

	render() {
		return (
			<View>
				<Text>Set</Text>
			</View>
		);
	}
	
}
