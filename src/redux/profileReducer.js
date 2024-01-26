import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
	posts: [
		{ id: 1, message: 'И это мой первый проект 👍', likesCount: 12 },
		{ id: 2, message: 'Я учу React 😎', likesCount: 34 },
	],
	profile: null,
	isFetching: false,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: action.newPostText,
				likesCount: 0,
				liked: false,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		case SET_STATUS:
			return { ...state, status: action.status };
		case SAVE_PHOTO_SUCCESS:
			return { ...state, profile: { ...state.profile, photos: action.photos } };
		default:
			return state;
	}
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
	dispatch(toggleIsFetching(false));
};

export const getUserStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setUserStatus(status));
	}
};

export const savePhoto = (file) => async (dispatch) => {
	const response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export default profileReducer;
