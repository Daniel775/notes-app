import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, DefaultTheme } from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';
import LoginPage from './src/pages/LoginPage';
import { Note } from './src/services/database';
import Router from './src/routes';

const appTheme: DefaultTheme = {
	primary: '#344955',
	secondary: '#485b66',
	alert: '#f9aa33',
	background: '#d6dadd',
	details: '#fff',
};

export default function App(): React.ReactElement {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<ThemeProvider theme={appTheme}>
			<AppProvider id="notes-app-cnyvm">
				<UserProvider fallback={LoginPage}>
					<RealmProvider
						schema={[Note]}
						sync={{
							flexible: true,
							initialSubscriptions: {
								update(subs, realm) {
									subs.add(realm.objects(Note));
								},
							},
						}}
					>
						<StatusBar
							backgroundColor="transparent"
							translucent
							barStyle="light-content"
						/>
						<Router />
					</RealmProvider>
				</UserProvider>
			</AppProvider>
		</ThemeProvider>
	);
}
