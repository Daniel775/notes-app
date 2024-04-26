import styled from 'styled-components/native';

export const AuthenticationArea = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px 30px;
	flex: 1;
	background-color: ${props => props.theme.background};
	gap: 20px;
`;

export const AuthenticationText = styled.Text`
	font-size: 16px;
	color: ${props => props.theme.primary};
`;

export const AuthenticationButton = styled.TouchableOpacity`
	align-items: center;
	border: none;
	background-color: ${props => props.theme.primary};
	padding: 12px;
	border-radius: 5px;
	cursor: pointer;
`;

export const AuthenticationButtonText = styled.Text`
	font-size: 16px;
	font-weight: bold;
	font-size: 16px;
	color: ${props => props.theme.details};
	color: ${props => props.theme.alert};
`;
