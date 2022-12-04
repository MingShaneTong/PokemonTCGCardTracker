import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Modal } from 'react-native-paper';

import NumberInput from '../../../components/NumberInput';
import { setCardForUser } from '../../../api/firestore'

export default function CardModal({ card, visible, onDismiss }){
	const [numCollected, setNumCollected] = useState(0);
	const [numWanted, setNumWanted] = useState(0);

	const margin = 32;
	const width = 200;
	const height = width / 2.5 * 3.5;

	function saveOnDismiss() {
		setCardForUser({ card, numCollected, numWanted })
		setNumCollected(0);
		setNumWanted(0);
		onDismiss();
	}

	return (
		<Modal visible={visible} onDismiss={saveOnDismiss}>
			{ !card ? null : (
				<View style={styles.container}>
					<Image 
						style={{ width: width, height: height, margin: margin }} 
						source={{ uri: card.images.small }} 
					/>
					<Text variant="labelMedium">Number Collected</Text>
					<NumberInput 
						initialValue={0} 
						minValue={0}
						onChange={setNumCollected} 
						promptTitle="Number Collected"
					/>

					<Text variant="labelMedium">Number Wanted</Text>
					<NumberInput 
						initialValue={0} 
						minValue={0}
						onChange={setNumWanted} 
						promptTitle="Number Wanted"
					/>
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