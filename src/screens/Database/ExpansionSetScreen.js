import React, { useEffect, useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import _ from "lodash";
import pokemon from 'pokemontcgsdk';
import { useNavigation } from '@react-navigation/native';

export default function ExpansionSetScreen({ route, navigation }) {
	const { set } = route.params;
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		navigation.setOptions({ title: set.name });
		
		// get card images of set
		pokemon.card.where({
			q: "set.id:"+set.id,
			select: "id,name,images"
		}).then(cards => {
			setLoading(false);
			setCards(cards['data']);
		}).catch(err => console.error("Expansion Set Error: " + err.message));
	});

	// renders the image of the card
	const _renderItem = ({ index, item }) => {
		const onPress = () => navigation.navigate("CardScreen", { card: item});
		return (
			<TouchableOpacity key={index} onPress={onPress}> 
				<Image style={styles.image} source={{ uri: item.images.small }} />
			</TouchableOpacity>
		);
	}

	return (
		<View>
			{loading ? 
				<ActivityIndicator animating={true} size="large" /> : 
				<FlatList
					renderItem={_renderItem}
					data={cards}
					numColumns={numColumns}
				/>
			}
		</View>
	);
}	

const numColumns = 3;
const imgMargin = 8;
const spacing = 2 * imgMargin * numColumns;
const width = Dimensions.get('window').width

const imgWidth = (width - spacing) / numColumns;
const imgHeight = imgWidth / 2.5 * 3.5;

const styles = StyleSheet.create({
    image: {
		width: imgWidth,
		height: imgHeight,
		margin: imgMargin
    }
});