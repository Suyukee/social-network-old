import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';

let initialState = {
	posts: [
		{ id: 1, message: "It's my project 👍", likesCount: 12 },
		{ id: 2, message: 'I make his with React 😎', likesCount: 34 },
	],
	newPostText: 'This new post',
	profile: null,
	isFetching: false,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			};
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		case SET_STATUS:
			return { ...state, status: action.status };
		default:
			return state;
	}
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		profileAPI.getProfile(userId).then((data) => {
			dispatch(setUserProfile(data));
			dispatch(toggleIsFetching(false));
		});
	};
};

export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setUserStatus(data));
		});
	};
};

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((data) => {
			if (data.resultCode === 0) {
				dispatch(setUserStatus(status));
			}
		});
	};
};

export default profileReducer;
