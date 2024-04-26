import axios from 'axios';
import { APP_URI } from '@env';
import { AuthenticationService, RefreshData, User } from '../types';

class AuthService implements AuthenticationService {
	authenticate = async (code: string) => {
		const response = await axios.post<User>(`${APP_URI}/authentication`, {
			code: code,
		});

		return response.data;
	};

	restoreSession = async (code: string) => {
		const response = await axios.get<RefreshData>(`${APP_URI}/refresh`, {
			headers: { Authorization: `Bearer ${code}` },
		});

		return response.data;
	};
}

export default new AuthService();
