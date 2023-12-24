import styles from './Login.module.css';
import { Formik, Form, Field } from 'formik';

const usersSearchFormValidate = (values) => {
	const errors = {};
	return errors;
};

const Login = () => {
	const submit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<Formik
					initialValues={{ login: '', password: '', rememberMe: false }}
					validate={usersSearchFormValidate}
					onSubmit={submit}
				>
					{({ isSubmitting }) => (
						<Form>
							<legend>LOGIN</legend>
							<Field type="text" name="login" placeholder="login" />
							<Field type="text" name="password" placeholder="password" />
							<label className={styles.checkbox}>
								<Field type="checkbox" name="rememberMe" />
								remember me
							</label>
							<button type="submit">Login</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Login;
