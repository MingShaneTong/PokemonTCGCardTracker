import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import _ from "lodash";
import pokemon from 'pokemontcgsdk';

export default class ExpansionSetScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			cards: undefined
		};
		
		// set title of the header
		this.set = props.route.params;
		this.navigation = props.navigation;
		this.navigation.setOptions({ title: this.set.name });
	}

	componentDidMount() {
		// get card images of set
		pokemon.card.where({
			q: "set.id:"+this.set.id,
			select: "id,name,images"
		}).then(cards => {
			this.setState({
				loading: false,
				cards: cards['data']
			})
		});
	}

	render() {
		let navigation = this.navigation;
		const _renderItem = ({ index, item }) => {
			// renders the image of the card
			const onPress = () => navigation.navigate("CardScreen", item);
			return (
				<TouchableOpacity key={index} onPress={onPress} > 
					<Image style={styles.image} source={{ uri: item.images.small }} />
				</TouchableOpacity>
			);
		}

		return (
			<View>
				{this.state.loading ? 
					<ActivityIndicator animating={true} size="large" /> : 
					<FlatList
						renderItem={_renderItem}
						data={this.state.cards}
						numColumns={numColumns}
					/>
				}
			</View>
		);
	}
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