import { useState, useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import RealmContext, { Note } from '../../services/database';
import { NewNotePageScreenProp } from '../../types';
import {
    Container,
    TitleInput,
    ContentInput,
} from './styles';


export default function NewNotePage({ navigation }: NewNotePageScreenProp): React.ReactElement {
    const realm = RealmContext.useRealm();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerLeft: props => <HeaderBackButton {...props} onPress={registerNote}/>,
            });

            const subscription = BackHandler.addEventListener('hardwareBackPress', registerNote);

            return () => subscription.remove();
        }, [title, content, navigation])
    );

    function registerNote(){
        if (!title && !content){
            navigation.goBack();
            return true;
        }

        realm.write(() => {
           realm.create('Note', Note.generate(title, content));
        });
        navigation.goBack();
        return true;
    }

    return (
        <Container>
            <TitleInput
                placeholder='Título'
                value={title}
                onChangeText={setTitle}
            />
            <ContentInput
                placeholder='Sua anotação'
                value={content}
                onChangeText={setContent}
            />
        </Container>
    );
}