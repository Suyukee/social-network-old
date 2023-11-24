let rerenderEntireTree = () => {
	console.log('State changed');
};

let state = {
	profilePage : {
		posts: [
			{ id: 1, message: 'It\'s my project 👍', likesCount: 12 },
			{ id: 2, message: 'I make his with React 😎', likesCount: 34 }
		],
		newPostText: 'This new post'
	},

	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Nastyusha', ava: 'https://sun59-2.userapi.com/s/v1/if2/vFjwLYgvFlamwzZxVB7xXHfFYNfTg73phAdgIh3b3BW4GFOh-aKj8QFqnSl5O9szqPWBgDZoXib1zz5wUaXujBHt.jpg?quality=95&crop=260,220,448,448&as=50x50,100x100,200x200,400x400&ava=1&u=AdC8jV9o7k5I5EFdloClHZ-82Xfy0hDhAWxXFCRdSUc&cs=200x200' },
			{ id: 2, name: 'Vovik', ava: 'https://sun59-1.userapi.com/s/v1/if2/SKDQfyY1NFSQrjgFJMrXfF3hjdv5rOAQ_aJTXI7EPN7G6fzGyXu8wmCAsgAy3FE5O6DncfQiR4eUhOvdv74n9z7H.jpg?quality=95&crop=65,56,703,703&as=50x50,100x100,200x200,400x400&ava=1&u=pYyra2gbPNUJtPhJw-YJKUV8V0EZwL5uJHo3ubWIswY&cs=200x200' },
			{ id: 3, name: 'Kirill', ava: 'https://sun59-1.userapi.com/s/v1/if2/2dZFi24q6S3NMM7t3Xfi61zHbldCRGUlG2xAV-tI-8eE2IEaWGI_tZMxmFVboZRdoUL5Zz7KKYybhjKBvG0nBByU.jpg?quality=95&crop=429,407,886,886&as=50x50,100x100,200x200,400x400&ava=1&u=5XOs6Gojj-VGdKWcHhq8KeaS4SgU8fwqTNbwTMwbSSU&cs=200x200' },
			{ id: 4, name: 'Katya', ava: 'https://sun59-1.userapi.com/s/v1/if2/dld0YN1Iewl3BenZuugftIdGBpXdoBjZFU-vlsSWr-9MFLYPfMAWy14N-QABmXzvG1IX4nxg-NpUiHmnX3PPaTh3.jpg?quality=96&crop=63,70,612,612&as=50x50,100x100,200x200,400x400&ava=1&u=WEnRsusLVhRB79bQl3fvXeIo9XJVRvqF1qtbRuy0N7c&cs=200x200' },
			{ id: 5, name: 'Yana', ava: 'https://sun59-2.userapi.com/s/v1/if2/VkNXZWfVISWxFjq0SHwmO0C1KT_UoZZGAoq51nkDpa9n4zz1-RFwLpB0iYtl26KH-hzs7FE4s9dXVcU1gvG2iYbL.jpg?quality=95&crop=15,0,2545,2545&as=50x50,100x100,200x200,400x400&ava=1&u=ggzcxQxB9KEds5kd1aapAKbU2njD-Z30oldjj_9fAak&cs=200x200' }
		],
		messages: [
			{ id: 1, message: 'Hello, world!' },
			{ id: 2, message: 'My name is Vovik' },
			{ id: 3, message: 'I am frontend-developer' },
			{ id: 4, message: 'And i like it' }
		]
	}
};

window.state = state;

export const addPost = () => {
	let newPost = {
		id: 3,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;