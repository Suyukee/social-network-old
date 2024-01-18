import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ProfileIcon from '../common/Icons/ProfileIcon';
import DialogsIcon from '../common/Icons/DialogsIcon';
import UsersIcon from '../common/Icons/UsersIcon';
import SignIn from '../common/Icons/SignIn';
import { useState } from 'react';

const Navbar = (props) => {
	const [profileIsActive, setProfileIsActive] = useState(false);
	const [dialogsIsActive, setDialogsIsActive] = useState(false);
	const [usersIsActive, setUsersIsActive] = useState(false);
	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				<div className={styles.item}>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							isActive ? setProfileIsActive(true) : setProfileIsActive(false)
						}
					>
						<ProfileIcon profileIsActive={profileIsActive} />
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink
						to="/dialogs"
						className={({ isActive }) =>
							isActive ? setDialogsIsActive(true) : setDialogsIsActive(false)
						}
					>
						<DialogsIcon dialogsIsActive={dialogsIsActive} />
					</NavLink>
				</div>
				<div className={styles.item}>
					<NavLink
						to="/users"
						className={({ isActive }) =>
							isActive ? setUsersIsActive(true) : setUsersIsActive(false)
						}
					>
						<UsersIcon usersIsActive={usersIsActive} />
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
