import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import ProfileIcon from '../common/Icons/ProfileIcon';
import DialogsIcon from '../common/Icons/DialogsIcon';
import UsersIcon from '../common/Icons/UsersIcon';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile">
					<ProfileIcon />
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs">
					<DialogsIcon />
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users">
					<UsersIcon />
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
