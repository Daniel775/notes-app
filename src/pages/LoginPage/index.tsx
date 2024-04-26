import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '@realm/react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authentication from '../../services/authentication';
import localStorage from '../../services/localStorage';
import { User } from '../../types';
import {
	AuthenticationArea,
	AuthenticationButton,
	AuthenticationText,
	AuthenticationButtonText,
} from './styles';

GoogleSignin.configure({
	webClientId:
		'743913190393-7g915213sjofvgkqo527ugfijqi38vmj.apps.googleusercontent.com',
});

export default function LoginPage() {
	const { logInWithJWT } = useAuth();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		authenticate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function authenticate() {
		setLoading(true);

		let token = '';
		const oldToken = localStorage.getString('@app_token');

		if (!oldToken) {
			token = await login();
		} else {
			token = await restoreSession(oldToken);
		}

		logInWithJWT(token);
		setLoading(false);
	}

	async function restoreSession(token: string): Promise<string> {
		const refreshData = await authentication.restoreSession(token);
		const oldUser = JSON.parse(
			localStorage.getString('@user') as string,
		) as User;

		oldUser.token = refreshData.token;

		localStorage.set('@user', JSON.stringify(oldUser));
		localStorage.set('@app_token', JSON.stringify(refreshData.token));

		return refreshData.token;
	}

	async function login(): Promise<string> {
		try {
			await GoogleSignin.hasPlayServices();
			await GoogleSignin.signIn();
			const { accessToken } = await GoogleSignin.getTokens();
			const data = await authentication.authenticate(accessToken);
			return data.token;
		} catch (err) {
			setLoading(false);
			throw err;
		}
	}

	return (
		<AuthenticationArea>
			<AuthenticationText>
				Entre com sua conta para poder sincronizar as suas anotações
				entre dispositivos.
			</AuthenticationText>
			<AuthenticationButton onPress={authenticate}>
				<AuthenticationButtonText>
					Registrar conta
				</AuthenticationButtonText>
			</AuthenticationButton>
			{loading && <ActivityIndicator size="large" />}
		</AuthenticationArea>
	);
}
