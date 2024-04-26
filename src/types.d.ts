import 'styled-components/native';
import {
	NativeStackScreenProps,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

declare module '@env' {
	export const APP_URI: string;
}

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
		title?: string;
		content?: string;
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

export interface User {
	id: string;
	name: string;
	email: string;
	image: string;
	token: string;
}

export interface RefreshData {
	token: string;
}

export interface AuthenticationService {
	authenticate: (code: string) => Promise<User>;
	restoreSession: (code: string) => Promise<RefreshData>;
}
