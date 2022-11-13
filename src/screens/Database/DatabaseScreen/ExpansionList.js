import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

function ExpansionItem({ set }) {
	let navigation = useNavigation();
	const onPress = () => navigation.navigate("ExpansionSetScreen", {set: set})
	return (
		<List.Item title={set.name} onPress={onPress} />
	);
}

function ExpansionAccordion({ series, sets }) {
	return (
		<List.Accordion
			title={series}
			left={props => <List.Icon {...props} icon="folder" />}
		>
			{sets.map((set, index) => 
				<ExpansionItem key={index} set={set} />
			)}
		</List.Accordion>
	);
}

export default function ExpansionList({ sets }) {
	return (
		<List.Section title="Expansion Sets">
			{sets.map(([series, sets], index) => 
				<ExpansionAccordion key={index} series={series} sets={sets} />
			)}
		</List.Section>
	);
};