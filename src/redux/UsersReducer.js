const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{
			id: 1, photoUrl: 'https://sun59-1.userapi.com/s/v1/if2/2dZFi24q6S3NMM7t3Xfi61zHbldCRGUlG2xAV-tI-8eE2IEaWGI_tZMxmFVboZRdoUL5Zz7KKYybhjKBvG0nBByU.jpg?quality=95&crop=429,407,886,886&as=50x50,100x100,200x200,400x400&ava=1&u=5XOs6Gojj-VGdKWcHhq8KeaS4SgU8fwqTNbwTMwbSSU&cs=200x200',
			followed: true, fullName: 'Kirill', status: 'I\'m a sad', location: { city: 'Moscow', country: 'Russia' }
		},
		{
			id: 2, photoUrl: 'https://sun59-1.userapi.com/s/v1/if2/dld0YN1Iewl3BenZuugftIdGBpXdoBjZFU-vlsSWr-9MFLYPfMAWy14N-QABmXzvG1IX4nxg-NpUiHmnX3PPaTh3.jpg?quality=96&crop=63,70,612,612&as=50x50,100x100,200x200,400x400&ava=1&u=WEnRsusLVhRB79bQl3fvXeIo9XJVRvqF1qtbRuy0N7c&cs=200x200',
			followed: false, fullName: 'Katya', status: 'I\'m a pretty', location: { city: 'Minsk', country: 'Belarus' }
		}
	],
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}

		case SET_USERS:
			return { ...state, users: [...state.users, action.users] };

		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;