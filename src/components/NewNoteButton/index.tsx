import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { NewNotePageRouteProp } from '../../types';
import { Container } from './styles';

export default function NewNoteButton(): React.ReactElement {
	const theme = useTheme();
	const navigation = useNavigation<NewNotePageRouteProp>();

	return (
		<Container onPress={() => navigation.navigate('NewNotePage')}>
			<FontAwesomeIcon name="plus" size={30} color={theme.primary} />
		</Container>
	);
}
