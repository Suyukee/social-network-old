import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ProfileIcon from '../common/Icons/ProfileIcon';
import DialogsIcon from '../common/Icons/DialogsIcon';
import UsersIcon from '../common/Icons/UsersIcon';
import SignIn from '../common/Icons/SignIn';

const Navbar = (props) => {
	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				<div className={styles.item}>
					<NavLink to="/profile">
						<ProfileIcon />
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/dialogs">
						<DialogsIcon />
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink to="/users">
						<UsersIcon />
					</NavLink>
				</div>
			</nav>
			<div className={styles.auth}>
				{props.isAuth ? (
					<div>
						{props.login} <button onClick={props.logout}>logout</button>
					</div>
				) : (
					<NavLink to="login">
						<SignIn />
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Navbar;
