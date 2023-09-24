import 'styled-components/native';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Note } from './services/database';


declare module 'styled-components/native' {
    export interface DefaultTheme {
        primary: string,
        secondary: string,
        alert: string,
        background: string,
        details: string,
    }
};

export type StackNavigatorParamList = {
    NotesPage: undefined,
};

export type NotesPageScreenProp = NativeStackScreenProps<StackNavigatorParamList, 'NotesPage'>;

export type NotesPageRouteProp = NativeStackNavigationProp<StackNavigatorParamList, 'NotesPage'>;
