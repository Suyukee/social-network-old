import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;

	let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} src={d.ava} />);
	let messagesElements = state.messages.map(m => <Message message={m.message} />);
	let newMessageBody = state.newMessageBody;

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	const onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				<h4>Dialogs</h4>
				{dialogsElements}
			</div>
			<div className={s.chat}>
				<div className={s.messages}>
					{messagesElements}
				</div>
				<div className={s.input}>
					<textarea
						value={newMessageBody}
						onChange={onNewMessageChange}
						type="text"
						placeholder='Message' />
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;