import 'styled-components/native';
import {
	NativeStackScreenProps,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

declare module 'styled-components/native' {
	export interface DefaultTheme {
		primary: string;
		secondary: string;
		alert: string;
		background: string;
		details: string;
	}
}

export type StackNavigatorParamList = {
	NotesPage: undefined;
	NewNotePage: undefined;
	NotePage: {
		_id: string;
		title: string;
		content: string;
	};
};

export type NotePageScreenProp = NativeStackScreenProps<
	StackNavigatorParamList,
	'NotePage'
>;

export type NotePageNavigationProp = NativeStackNavigationProp<
	StackNavigatorParamList,
	'NotePage'
>;

export type NewNotePageScreenProp = NativeStackScreenProps<
	StackNavigatorParamList,
	'NewNotePage'
>;

export type NewNotePageRouteProp = NativeStackNavigationProp<
	StackNavigatorParamList,
	'NewNotePage'
>;

export type NotesPageScreenProp = NativeStackScreenProps<
	StackNavigatorParamList,
	'NotesPage'
>;

export type NotesPageRouteProp = NativeStackNavigationProp<
	StackNavigatorParamList,
	'NotesPage'
>;
