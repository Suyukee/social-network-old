import styles from './MyPosts.module.css';
import Post from './Post/Post';
import SendIcon from '../../common/Icons/SendIcon';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { textFormValidate } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
		<Post message={p.message} likesCount={p.likesCount} />
	));
	return (
		<div className={styles.content}>
			{postsElements}
			<div className={styles.post}>
				<AddNewPostForm addPost={props.addPost} />
			</div>
		</div>
	);
};

const AddNewPostForm = (props) => {
	const addNewMessage = (values) => {
		props.addPost(values.text);
	};

	return (
		<Formik initialValues={{ text: '' }} validate={textFormValidate} onSubmit={addNewMessage}>
			{(errors) => (
				<Form>
					{/* <Textarea name="text" type="text" label="First Name" placeholder={'Start typing...'} /> */}
					<Field
						component="textarea"
						type="text"
						name="text"
						placeholder="Start typing..."
						className={errors ? styles.errors : ''}
					/>
					<ErrorMessage name="text">
						{(msg) => <div className={styles.red}>{msg}</div>}
					</ErrorMessage>
					<div className={styles.button}>
						<button type="submit">
							<SendIcon />
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default MyPosts;
