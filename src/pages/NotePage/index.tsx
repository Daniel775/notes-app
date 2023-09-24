import { useState, useCallback } from 'react';
import { BackHandler, View } from 'react-native';
import Realm from 'realm';
import { useTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import RealmContext, { Note } from '../../services/database';
import { NotePageScreenProp } from '../../types';
import {
    Container,
    TitleInput,
    ContentInput,
    DeleteButtonContainer,
    DeleteButtonText,
} from './styles';


export default function NotePage({ navigation, route }: NotePageScreenProp): React.ReactElement {
    const theme = useTheme();
    const realm = RealmContext.useRealm();
    const note = RealmContext.useObject(Note, new Realm.BSON.ObjectId(route.params._id));
    const [title, setTitle] = useState(route.params.title);
    const [content, setContent] = useState(route.params.content);

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerLeft: props => <HeaderBackButton {...props} onPress={updateNote}/>,
            });

            const subscription = BackHandler.addEventListener('hardwareBackPress', updateNote);

            return () => subscription.remove();
        }, [title, content, navigation])
    );

    function updateNote(){
        if (!title && !content){
            navigation.goBack();
            return true;
        }

        realm.write(() => {
            note!.title = title;
            note!.content = content
        });

        navigation.goBack();
        return true;
    }

    function deleteNote(){
        realm.write(() => {
            realm.delete(note);
        });

        navigation.goBack();
    }

    return (
        <Container>
            <View>
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
            </View>
            <DeleteButtonContainer onPress={deleteNote}>
                <FontAwesomeIcon name='trash' size={20} color={theme.details}/>
                <DeleteButtonText>Deletar</DeleteButtonText>
            </DeleteButtonContainer>
        </Container>
    );
}