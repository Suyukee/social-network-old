import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={ s.header }>
			<div className={ s.content }>
				<img className={ s.img } src="https://www.shareicon.net/data/128x128/2016/07/08/117035_media_512x512.png" height="40px" />
				<span className={ s.span }>Social Network</span>
			</div>
		</header>
	);
}

export default Header;