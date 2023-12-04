const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	users: [
		{ id: 1, fullName: 'Alex', status: 'I\'m a sad', location: {city: 'Moscow', country: 'Russia'} },
		{ id: 2, fullName: 'Clay', status: 'I\'m a pretty', location: {city: 'Minsk', country: 'Belarus'} }
	],
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;