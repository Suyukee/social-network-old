import profileReducer, { addPost, deletePost } from './profileReducer';

let state = {
	posts: [
		{ id: 1, message: "It's my project 👍", likesCount: 12 },
		{ id: 2, message: 'I make his with React 😎', likesCount: 34 },
	],
};

it('length of posts should be increment', () => {
	// 1. text data
	const action = addPost('Hello, world!');

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
	// 1. text data
	const action = addPost('Hello, world!');

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts[2].message).toBe('Hello, world!');
});

it('after deleting length of messages should be decrement', () => {
	// 1. text data
	const action = deletePost(1);

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(1);
});
