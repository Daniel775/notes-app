import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: { justifyContent: 'space-between', flex: 1 },
})`
	background-color: ${props => props.theme.secondary};
`;

export const TitleInput = styled.TextInput.attrs({
	multiline: false,
})`
	background-color: transparent;
	border-width: 0px;
	color: ${props => props.theme.details};
	font-size: 30px;
	margin: 5px;
`;

export const ContentInput = styled.TextInput.attrs({
	multiline: true,
})`
	background-color: transparent;
	text-align-vertical: top;
	border-width: 0px;
	color: ${props => props.theme.details};
	font-size: 20px;
	margin: 5px;
	min-height: 300px;
`;

export const DeleteButtonContainer = styled.TouchableOpacity`
	align-items: center;
	align-self: center;
	padding: 15px;
	margin: 5px;
`;

export const DeleteButtonText = styled.Text`
	color: ${props => props.theme.details};
	font-size: 14px;
	margin-top: 5px;
`;
