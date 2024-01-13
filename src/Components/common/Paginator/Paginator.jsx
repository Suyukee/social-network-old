import styles from './Paginator.module.css';

const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	pagesCount = 12; // Удалить ограничитель
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={styles.pagesList}>
			{pages.map((p) => {
				return (
					<span
						className={props.currentPage === p && styles.selectedPage}
						onClick={(e) => {
							props.onPageChanged(p);
						}}
					>
						{p}
					</span>
				);
			})}
		</div>
	);
};

export default Paginator;
