import * as React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

function ExpansionItem({ set, navigation }) {
	const onPress = () => navigation.navigate("ExpansionSetScreen", set)
	return (
		<List.Item title={set.name} onPress={onPress}>
		</List.Item>
	);
}

function ExpansionAccordion({ series, sets, navigation }) {
	return (
		<List.Accordion
			title={series}
			left={props => <List.Icon {...props} icon="folder" />}
		>
			{sets.map((set, index) => 
				<ExpansionItem 
					key={index} 
					set={set} 
					navigation={navigation}  
				/>
			)}
		</List.Accordion>
	);
}

export default function ExpansionList({ sets, navigation }) {	
	return (
		<List.Section title="Expansion Sets">
			{sets.map(([series, sets], index) => 
				<ExpansionAccordion 
					key={index} 
					series={series} 
					sets={sets}
					navigation={navigation} 
				/>
			)}
		</List.Section>
	);
};