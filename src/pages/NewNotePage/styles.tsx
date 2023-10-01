import styled from 'styled-components/native';

export const Container = styled.ScrollView`
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
