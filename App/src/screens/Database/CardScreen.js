import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, FlatList, Image, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import _ from "lodash";
import pokemon from 'pokemontcgsdk';

export default class CardScreen extends React.Component {
	constructor(props) {
		super(props);
		
		// set title of the header
		this.card = props.route.params;
		this.props.navigation.setOptions({ title: this.card.name });
	}


	render() {
        const margin = 16;
        const width = Dimensions.get("window").width - 2 * margin;
        const height = width / 2.5 * 3.5;

		return (
			<View>
				<Image 
                    style={{ width: width, height: height, margin: margin }} 
                    source={{ uri: this.card.images.large }} 
                />
			</View>
		);
	}
}