import NewNoteButton from '../../components/NewNoteButton';
import RealmContext, { Note } from '../../services/database';
import { NotesPageScreenProp } from '../../types';
import {
    List,
    NoteContainer,
    NoteTitle,
    NoteContent,
} from './styles';


export default function NotesPage({ navigation }: NotesPageScreenProp): React.ReactElement {
    const { useQuery } = RealmContext;
    const notes = useQuery(Note);
    
    function _renderNote({ item }: { item: Note }): React.ReactElement {
        const noteParams = {
            _id: item._id.toHexString(),
            title: item.title,
            content: item.content,
        };
        
        return (
            <NoteContainer onPress={() => navigation.navigate('NotePage', noteParams)}>
                <NoteTitle>{item.title}</NoteTitle>
                <NoteContent>{item.content}</NoteContent>
            </NoteContainer>
        );
    }

    return (
        <>
            <List
                keyExtractor={item => item._id.toString()}
                data={notes}
                renderItem={_renderNote}
            />
            <NewNoteButton/>
        </>
    );
}