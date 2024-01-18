import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Formik, useField } from 'formik';
import { textFormValidate } from '../../../utils/validators/validators';
import SendIcon from '../../common/Icons/SendIcon';

const MyPosts = (props) => {
	let postsElements = [...props.posts]
		.reverse()
		.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={styles.content}>
			<AddNewPostForm addPost={props.addPost} />
			{postsElements}
		</div>
	);
};

const AddNewPostForm = (props) => {
	const addNewMessage = (values) => {
		props.addPost(values.text);
	};
	const Textarea = ({ ...props }) => {
		const [field] = useField(props);

		return (
			<div className={styles.wrapper}>
				<div className={styles.post}>
					<textarea {...field} {...props} />
					<div className={styles.button}>
						<button type="submit">
							<SendIcon />
						</button>
					</div>
				</div>
			</div>
		);
	};
	return (
		<Formik initialValues={{ text: '' }} validate={textFormValidate} onSubmit={addNewMessage}>
			{(errors) => (
				<Form>
					<Textarea name="text" type="text" label="First Name" placeholder={'Start typing...'} />
				</Form>
			)}
		</Formik>
	);
};

export default MyPosts;
