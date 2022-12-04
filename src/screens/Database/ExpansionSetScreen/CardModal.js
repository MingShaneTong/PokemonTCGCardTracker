import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Modal } from 'react-native-paper';

import NumberInput from '../../../components/NumberInput';
import DataStore from '../../../api/firestore'

export default function CardModal({ card, visible, onDismiss }){
	const [loading, setLoading] = useState(true);
	const [numCollected, setNumCollected] = useState(0);
	const [numWanted, setNumWanted] = useState(0);

	const margin = 32;
	const width = 200;
	const height = width / 2.5 * 3.5;

	function saveOnDismiss() {
		DataStore.Cards.setCardDoc({ card, numCollected, numWanted })
		setNumCollected(0);
		setNumWanted(0);
		setLoading(true);
		onDismiss();
	}

	useEffect(() => {
		async function getNumCollectedAndWanted() {
			// get num collected and wanted from db
			if(!card) { return; }
			const cardDoc = await DataStore.Cards.getCardDoc(card.id);

			if (cardDoc.exists()) {
				setNumCollected(cardDoc.data().numCollected);
				setNumWanted(cardDoc.data().numWanted);
			}
			setLoading(false);
		}
		getNumCollectedAndWanted();
	}, [card]);

	return (
		<Modal visible={visible} onDismiss={saveOnDismiss}>
			{ !card ? null : (
				<View style={styles.container}>
					<Image 
						style={{ width: width, height: height, margin: margin }} 
						source={{ uri: card.images.small }} 
					/>
					<Text variant="labelMedium">Number Collected</Text>
					{loading ? null : <NumberInput 
						minValue={0}
						value={numCollected}
						onChange={setNumCollected} 
					/>}

					<Text variant="labelMedium">Number Wanted</Text>
					{loading ? null : <NumberInput 
						minValue={0}
						value={numWanted}
						onChange={setNumWanted} 
					/>}
				</View>
			)}
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: { 
		backgroundColor: "white", 
		alignItems: 'center',
		justifyContent: 'center'
	}
})