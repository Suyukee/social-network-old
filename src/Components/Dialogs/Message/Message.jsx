import s from './Message.module.css'

const Message = (props) => {
	return (
		<div className={s.dialog}>
			<span>{props.message}</span>
		</div>
	);
};

export default Message;