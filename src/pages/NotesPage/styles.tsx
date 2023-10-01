import styled from 'styled-components/native';


export const List = styled.FlatList.attrs({
    style: { flex: 1 },
	contentContainerStyle: { flexGrow: 1 },
	columnWrapperStyle: {
		flex:1,
		justifyContent: 'space-between',
	},
    numColumns: 2,
})``;


export const NoteContainer = styled.TouchableOpacity`
    flex-direction: column;
    background-color: ${props => props.theme.secondary};
    height: 250px;
    margin: 10px 5px;
    border-radius: 10px;
    flex: 0.5;
    overflow: hidden;
    align-self: flex-end;
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

export const EmptyListContainer = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	margin-top: 40px;
`;

export const EmptyListText = styled.Text`
	color: ${props => props.theme.primary};
	font-size: 20px;
	text-align: center;
`;
