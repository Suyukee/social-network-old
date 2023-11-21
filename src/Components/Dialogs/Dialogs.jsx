import { useRef } from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} src={d.ava} />);
	let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

	const inputRef = useRef(null);

	const handleClick = () => {
		inputRef.current.focus();
		alert(inputRef.current.value);
	}

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
					<textarea ref={inputRef} type="text" placeholder='Message'/>
					<button onClick={handleClick}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;