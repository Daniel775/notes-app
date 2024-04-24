import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import NotesPage from './pages/NotesPage';
import NewNotePage from './pages/NewNotePage';
import NotePage from './pages/NotePage';
import { useAuth } from './contexts/authContent';
import { StackNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function Router(): React.ReactElement {
	const auth = useAuth();
	const theme = useTheme();

	useEffect(() => {
		auth.login();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="NotesPage"
				screenOptions={{
					headerStyle: { backgroundColor: theme.primary },
					headerTintColor: theme.details,
					contentStyle: { backgroundColor: theme.background },
				}}
			>
				<Stack.Screen
					name="NotesPage"
					component={NotesPage}
					options={{ title: 'Minhas anotatações' }}
				/>
				<Stack.Screen
					name="NewNotePage"
					component={NewNotePage}
					options={{ title: 'Nova anotação' }}
				/>
				<Stack.Screen
					name="NotePage"
					component={NotePage}
					options={{ title: 'Editar anotação' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
