import React, { useEffect } from 'react';
import { View, Dimensions, Image } from 'react-native';
import _ from "lodash";

export default function CardScreen({ route, navigation }){
	const { card } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: card.name });
	});
	
	const margin = 16;
	const width = Dimensions.get("window").width - 2 * margin;
	const height = width / 2.5 * 3.5;

	return (
		<View>
			<Image 
				style={{ width: width, height: height, margin: margin }} 
				source={{ uri: card.images.large }} 
			/>
		</View>
	);
}