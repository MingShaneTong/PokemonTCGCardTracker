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
	const [currentPage, setCurrentPage] = useState(1);
	const [finished, setFinished] = useState(false);

	useEffect(() => {
		navigation.setOptions({ title: set.name });
		getData();
	}, [currentPage]);

	// loads cards for each page
	const getData = () => {
		if(finished) 	return;
		
		pokemon.card.where({
			q: "set.id:"+set.id,
			select: "id,name,images",
			pageSize: 24,
			page: currentPage
		}).then(resCards => {
			// check if there are more cards
			setLoading(false);
			if(resCards['count'] <= 0) {
				setFinished(true);
			} else {
				setCards(cards.concat(resCards['data']));
			}
		}).catch(
			err => console.error("Expansion Set Error: " + err.message)
		);
	}

	// increment the page
	const handleLoadMore = () => {
		if(finished || loading) 	return;
		setLoading(true);
		setCurrentPage(currentPage + 1);
	}

	// renders the image of the card
	const renderItem = ({ item }) => {
		const onPress = () => navigation.navigate("CardScreen", { card: item});
		return (
			<TouchableOpacity onPress={onPress}> 
				<Image style={styles.image} source={{ uri: item.images.small }} />
			</TouchableOpacity>
		);
	}

	// renders loader at bottom of list if not complete
	const renderFooter = () => {
		return finished ? null : 
			<ActivityIndicator animating={true} size="large" />;
	}

	return (
		<View>
			<FlatList
				renderItem={renderItem}
				data={cards}
				numColumns={numColumns}
				keyExtractor={(item, index) => index.toString()}
				ListFooterComponent={renderFooter}
				onEndReached={handleLoadMore}
				onEndReachedThreshold={0.01}
			/>
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