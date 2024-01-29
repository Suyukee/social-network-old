import { Form, Formik, useField } from 'formik';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import SendIcon from '../common/Icons/SendIcon';
import { textFormValidate } from '../../utils/validators/validators';

const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name} src={d.ava} />
	));
	let messagesElements = state.messages.map((m) => <Message message={m.message} />);

	return (
		<div className={styles.contentWrapper}>
			<div className={styles.dialogs}>{dialogsElements}</div>
			<div className={styles.chat}>
				<div className={styles.messages}>{messagesElements}</div>
				<AddMessageForm sendMessage={props.sendMessage} />
			</div>
		</div>
	);
};

const AddMessageForm = (props) => {
	const addNewMessage = (values) => {
		props.sendMessage(values.text);
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
					<Textarea name="text" type="text" placeholder={'Напишите сообщение...'} />
				</Form>
			)}
		</Formik>
	);
};

export default Dialogs;
