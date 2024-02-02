import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Formik, useField } from 'formik';
import { textFormValidate } from '../../../utils/validators/validators';
import SendIcon from '../../common/Icons/SendIcon';

const MyPosts = (props) => {
	let postsElements = [...props.posts]
		.reverse()
		.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
	return (
		<div className={styles.content}>
			<AddNewPostForm addPost={props.addPost} />
			{postsElements}
		</div>
	);
};

const AddNewPostForm = (props) => {
	const addNewMessage = (values, actions) => {
		props.addPost(values.text);
		actions.resetForm({ values: { text: '' } });
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
					<Textarea name="text" type="text" placeholder={'Начните печатать...'} />
				</Form>
			)}
		</Formik>
	);
};

export default MyPosts;
