import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, Button, Text, ActivityIndicator } from 'react-native-paper';
import _ from "lodash";
import pokemon from 'pokemontcgsdk';

import ExpansionList from './DatabaseScreen/ExpansionList';


export default class DatabaseScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			sets: undefined
		};
	}

	componentDidMount() {
		// loads the pokemon sets from the api
        pokemon.set.where({ 
            select: "id,name,series,releaseDate,images",
            orderBy: "releaseDate"
        }).then((sets) => {
            // group by series
            let setSeries = Object.entries(_.groupBy(sets.data, "series"));
            
            // move 'other' category to the first position
            let otherIndex = _.findIndex(setSeries, o => o[0] == "Other");
            if (otherIndex != -1) {
                setSeries.unshift(setSeries.splice(otherIndex, 1)[0]);
            }
			setSeries.reverse();

			this.setState({
				loading: false,
				sets: setSeries
			})
        })
    }

	render() {
		const navigation = this.props.navigation;
		
		return (
			<ScrollView>
				{this.state.loading ? 
					<ActivityIndicator animating={true} size="large" /> : 
					<ExpansionList sets={this.state.sets} navigation={navigation} />
				}
			</ScrollView>
		);
	}
}
