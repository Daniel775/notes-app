import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import authentication from '../services/authentication';
import { User } from '../types';
import localStorage from '../services/localStorage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface AuthProviderValue {
	user: User | null;
	logged: boolean;
	login: () => Promise<void>;
	logout: () => Promise<void>;
}

GoogleSignin.configure({
	webClientId:
		'743913190393-7g915213sjofvgkqo527ugfijqi38vmj.apps.googleusercontent.com',
});

const context = createContext<AuthProviderValue>({} as AuthProviderValue);

export function AuthProvider({
	children,
}: PropsWithChildren): React.ReactElement {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const token = localStorage.getString('@app_token');

		if (!token) {
			return;
		}

		restoreSession(token);
	}, []);

	async function restoreSession(token: string) {
		const refreshData = await authentication.restoreSession(token);
		const oldUser = JSON.parse(
			localStorage.getString('@user') as string,
		) as User;

		oldUser.token = refreshData.token;

		localStorage.set('@user', JSON.stringify(oldUser));
		localStorage.set('@app_token', JSON.stringify(refreshData.token));

		setUser(oldUser);
	}

	async function logout() {
		setUser(null);
		localStorage.clearAll();
	}

	async function login() {
		// GoogleSignin.signIn();
		// const data = await authentication.authenticate(token);
		// setUser(data);

		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		console.log({ userInfo });
	}

	return (
		<context.Provider value={{ user, logged: !!user, login, logout }}>
			{children}
		</context.Provider>
	);
}

export const useAuth = () => useContext(context);
