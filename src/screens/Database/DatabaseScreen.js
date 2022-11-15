import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import _ from "lodash";
import pokemon from 'pokemontcgsdk';

import ExpansionList from './DatabaseScreen/ExpansionList';


export default function DatabaseScreen() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
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

			// set the states of the components
			setLoading(false);
			setData(setSeries);
        }).catch(err => console.error("Database Error: " + err.message));
    });
	
	const navigation = useNavigation();
	return (
		<ScrollView>
			{loading ? 
				<ActivityIndicator animating={true} size="large" /> : 
				<ExpansionList sets={data} />
			}
		</ScrollView>
	);
}
