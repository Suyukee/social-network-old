import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={s.item}>
			<img src={props.src} alt='' />
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

export default DialogItem;