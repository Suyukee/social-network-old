import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import ProfileIcon from './ProfileIcon';
import DialogsIcon from './DialogsIcon';
import UsersIcon from './UsersIcon';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile"><ProfileIcon /></NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs"><DialogsIcon /></NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users"><UsersIcon /></NavLink>
			</div>
		</nav>
	);
}

export default Navbar;