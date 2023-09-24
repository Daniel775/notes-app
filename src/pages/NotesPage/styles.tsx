import styled from 'styled-components/native';


export const List = styled.FlatList.attrs({
    style: { flex: 1 },
	contentContainerStyle: { flexGrow: 1 },
	columnWrapperStyle: {
		flex:1,
		justifyContent: 'space-around',
	},
    numColumns: 2,
})``;


export const NoteContainer = styled.TouchableOpacity`
    flex-direction: column;
    background-color: ${props => props.theme.secondary};
    height: 250px;
    margin: 10px 5px;
    border-radius: 10px;
    flex: 1;
    overflow: hidden;
`;


export const NoteTitle = styled.Text.attrs({
    numberOfLines: 1,
})`
    color: ${props => props.theme.details};
    font-size: 25px;
    margin: 5px 10px;
`;


export const NoteContent = styled.Text.attrs({
    ellipsizeMode: 'tail',
    numberOfLines: 10,
})`
    color: ${props => props.theme.details};
    font-size: 15px;
    margin: 5px 10px;
`;
