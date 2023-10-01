import { useState, useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import RealmContext, { Note } from '../../services/database';
import { NewNotePageScreenProp } from '../../types';
import { Container, TitleInput, ContentInput } from './styles';

export default function NewNotePage({
	navigation,
}: NewNotePageScreenProp): React.ReactElement {
	const realm = RealmContext.useRealm();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const registerNote = useCallback(() => {
		if (!title && !content) {
			navigation.goBack();
			return true;
		}

		realm.write(() => {
			realm.create('Note', Note.generate(title, content));
		});

		navigation.goBack();

		return true;
	}, [navigation, realm, title, content]);

	const BackButton = useCallback(
		() => <HeaderBackButton onPress={registerNote} />,
		[registerNote],
	);

	useFocusEffect(
		useCallback(() => {
			navigation.setOptions({
				headerLeft: BackButton,
			});

			const subscription = BackHandler.addEventListener(
				'hardwareBackPress',
				registerNote,
			);

			return () => subscription.remove();
		}, [navigation, registerNote, BackButton]),
	);

	return (
		<Container>
			<TitleInput
				placeholder="Título"
				value={title}
				onChangeText={setTitle}
			/>
			<ContentInput
				placeholder="Sua anotação"
				value={content}
				onChangeText={setContent}
			/>
		</Container>
	);
}
