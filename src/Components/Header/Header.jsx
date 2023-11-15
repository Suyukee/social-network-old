import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={ s.header }>
			<div className={ s.content }>
				<img className={ s.img } height='40px' width='40px' alt='' src='https://www.svgrepo.com/show/475654/github-color.svg' />
				<span className={ s.span }>Social Network</span>
			</div>
		</header>
	);
}

export default Header;