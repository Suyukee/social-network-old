import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049' },
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
			.then((response) => response.data);
	},

	getProfile(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data);
	},

	getAuth() {
		return instance
			.get('auth/me', {
				withCredentials: true,
			})
			.then((response) => response.data);
	},

	followUser(userId) {
		return axios
			.post(
				`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
				{},
				{
					withCredentials: true,
					headers: {
						'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049',
					},
				},
			)
			.then((response) => response.data);
	},

	unfollowUser(userId) {
		return axios
			.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
				withCredentials: true,
				headers: {
					'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049',
				},
			})
			.then((response) => response.data);
	},
};
