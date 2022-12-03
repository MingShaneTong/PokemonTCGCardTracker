import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import CardGallery from './ExpansionSetScreen/CardGallery';
import CardModal from './ExpansionSetScreen/CardModal';

export default function ExpansionSetScreen({ route, navigation }) {
	const [visible, setVisible] = useState(false);
	const [cardClicked, setCardClicked] = useState(null);
	const { set } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: set.name });
	});

	const showModal = (card) => {
		setCardClicked(card);
		setVisible(true);
	}

	const hideModal = () => setVisible(false);

	return (
		<View>
			<CardGallery set={set} onCardClick={showModal} />
			<CardModal 
				card={cardClicked} 
				visible={visible} 
				onDismiss={hideModal}
			/>
		</View>
	);
}