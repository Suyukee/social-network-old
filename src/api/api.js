import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': '45aa9eca-58a5-4f86-a0db-b271e8e90049' },
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`);
	},
	follow(userId) {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
	},
	unfollow(userId) {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
	},
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put('profile/status', { status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile);
		return instance.put('profile/photo', formData, {
			headers: { 'Content-Type': 'multupart/form-data' },
		});
	},
	saveProfile(profile) {
		return instance.put('profile', profile);
	},
};

export const authAPI = {
	me() {
		return instance.get('auth/me');
	},
	login(email, password, rememberMe = false) {
		return instance.post('auth/login', {
			email: email,
			password: password,
			rememberMe: rememberMe,
		});
	},
	logout() {
		return instance.delete('auth/login');
	},
};
