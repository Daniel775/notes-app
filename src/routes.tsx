import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import NotesPage from './pages/NotesPage';
import { StackNavigatorParamList } from './types';


const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function Router(): React.ReactElement {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='NotesPage'
                screenOptions={{
                    headerStyle: { backgroundColor: theme.primary },
                    headerTintColor: theme.details,
                    contentStyle: { backgroundColor: theme.background}
                }}
            >
                <Stack.Screen
                    name='NotesPage'
                    component={NotesPage}
                    options={{ title: 'Minhas anotatações' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}