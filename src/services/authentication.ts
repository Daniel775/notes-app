import axios from 'axios';
import { AuthenticationService, RefreshData, User } from '../types';

class AuthService implements AuthenticationService {
	private uri: string = process.env.API_URI as string;

	authenticate = async (code: string) => {
		const response = await axios.post<User>(`${this.uri}/authentication`, {
			code: code,
		});

		return response.data;
	};

	restoreSession = async (code: string) => {
		const response = await axios.get<RefreshData>(`${this.uri}/refresh`, {
			headers: { Authorization: `Bearer ${code}` },
		});

		return response.data;
	};
}

export default new AuthService();
