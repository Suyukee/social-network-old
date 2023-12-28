import styles from './Login.module.css';
import { Formik, Form, Field } from 'formik';

const usersLoginFormValidate = (values) => {
	const errors = {};
	return errors;
};

const Login = () => {
	const submit = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<Formik
					initialValues={{ login: '', password: '', rememberMe: false }}
					validate={usersLoginFormValidate}
					onSubmit={submit}
				>
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
				</Formik>
			</div>
		</div>
	);
};

export default Login;
