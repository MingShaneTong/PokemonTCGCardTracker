import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import pokemon from "pokemontcgsdk"

import { POKEMON_API_KEY } from './config';
import { AuthProvider } from './src/context/auth';
import Main from './src/navigation/Main'

export default function App() {
	pokemon.configure({apiKey: POKEMON_API_KEY})
	return (
		<AuthProvider>	
			<PaperProvider>
				<Main />
			</PaperProvider>
		</AuthProvider>
	);
}