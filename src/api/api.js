import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049' },
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},

	follow(userId) {
		return instance
			.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
			.then((response) => response.data);
	},

	unfollow(userId) {
		return instance
			.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
			.then((response) => response.data);
	},

	getProfile(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data);
	},
};

export const authAPI = {
	me() {
		return instance.get('auth/me').then((response) => response.data);
	},
};
