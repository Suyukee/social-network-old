import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<NavLink to={path}>
			<div className={s.item}>
				<img src={props.src} alt="" />
				<div className={s.content}>{props.name}</div>
			</div>
		</NavLink>
	);
};

export default DialogItem;
