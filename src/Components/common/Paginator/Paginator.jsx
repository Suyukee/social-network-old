import styles from './Paginator.module.css';
import PrevPageIcon from '../Icons/PrevPageIcon';
import NextPageIcon from '../Icons/NextPageIcon';
import { useState } from 'react';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 6 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={styles.pagesList}>
			{portionNumber > 1 && (
				<div className={styles.buttonPage} onClick={() => setPortionNumber(portionNumber - 1)}>
					<PrevPageIcon />
				</div>
			)}
			{pages
				.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
					return (
						<span
							className={currentPage === p && styles.selectedPage}
							onClick={(e) => {
								onPageChanged(p);
							}}
						>
							{p}
						</span>
					);
				})}
			{portionNumber < portionCount && (
				<div className={styles.buttonPage} onClick={() => setPortionNumber(portionNumber + 1)}>
					<NextPageIcon />
				</div>
			)}
		</div>
	);
};

export default Paginator;
