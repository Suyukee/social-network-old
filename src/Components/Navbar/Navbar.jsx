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
					// <img
					// 	src="https://sun59-1.userapi.com/s/v1/if2/SKDQfyY1NFSQrjgFJMrXfF3hjdv5rOAQ_aJTXI7EPN7G6fzGyXu8wmCAsgAy3FE5O6DncfQiR4eUhOvdv74n9z7H.jpg?quality=95&crop=65,56,703,703&as=50x50,100x100,200x200,400x400&ava=1&u=pYyra2gbPNUJtPhJw-YJKUV8V0EZwL5uJHo3ubWIswY&cs=200x200"
					// 	alt=""
					// />
					<p>{props.login}</p>
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
