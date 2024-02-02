import userPhoto from '../assets/images/user.png';

const SEND_MESSAGE = 'social-network/dialogs/SEND-MESSAGE';

let initialState = {
	dialogs: [
		{
			id: 1,
			name: 'User 1',
			ava: userPhoto,
		},
		{
			id: 2,
			name: 'User 2',
			ava: userPhoto,
		},
		{
			id: 3,
			name: 'User 3',
			ava: userPhoto,
		},
		{
			id: 4,
			name: 'User 4',
			ava: userPhoto,
		},
		{
			id: 5,
			name: 'User 5',
			ava: userPhoto,
		},
	],
	messages: [
		{ id: 1, message: 'Привет, мир!' },
		{ id: 2, message: 'Меня зовут Вова' },
		{ id: 3, message: 'Я фронтенд разработчик' },
		{ id: 4, message: 'И мне это нравится' },
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 5, message: body }],
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
