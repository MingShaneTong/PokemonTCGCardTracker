import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { AuthProvider } from './src/context/auth';
import Main from './src/navigation/Main'

export default function App() {
	return (
		<AuthProvider>	
			<PaperProvider>
				<Main />
			</PaperProvider>
		</AuthProvider>
	);
}