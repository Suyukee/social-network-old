import { Form, Field, Formik } from 'formik';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name} src={d.ava} />
	));
	let messagesElements = state.messages.map((m) => <Message message={m.message} />);

	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>{dialogsElements}</div>
			<div className={s.chat}>
				<div className={s.messages}>{messagesElements}</div>
				<AddMessageForm sendMessage={props.sendMessage} />
			</div>
		</div>
	);
};

const AddMessageForm = (props) => {
	const messagesFormValidate = (values) => {
		const errors = {};
		return errors;
	};
	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};
	return (
		<Formik
			initialValues={{ newMessageBody: '' }}
			validate={messagesFormValidate}
			onSubmit={addNewMessage}
		>
			<Form className={s.input}>
				<Field component="textarea" type="text" name="newMessageBody" placeholder="Message..." />
				<button type="submit">Send</button>
			</Form>
		</Formik>
	);
};

export default Dialogs;
