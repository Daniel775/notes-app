import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { Container } from './styles';


export default function NewNoteButton(): React.ReactElement {
    const theme = useTheme();

    return (
        <Container onPress={() => null}>
            <FontAwesomeIcon name='plus' size={30} color={theme.primary}/>
        </Container>
    )
}