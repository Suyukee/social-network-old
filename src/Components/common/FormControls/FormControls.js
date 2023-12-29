import { useField } from 'formik';
import styles from './FormControl.module.css';

export const Textarea = ({ ...props }) => {
	const [field, meta] = useField(props);
	const hasError = meta.touched && meta.error;
	return (
		<div className={hasError ? '' : ''}>
			<div className={styles.wrapper}>
				<textarea {...field} {...props} />
				{meta.touched && meta.error ? <span>{meta.error}</span> : null}
			</div>
		</div>
	);
};
