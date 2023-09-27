import styles from './styles.module.css';

export default function Login() {
	return (
		<div className={styles.container}>
			<div className={styles.informationContainer}>
				<h1 className={styles.title}>Social</h1>
				<p style={{ color: '#000000', fontSize: '20px' }}>
					Connect with friends and the world around you on Social
				</p>
			</div>
			<div className={styles.logInFormContainer}>
				<input
					name="Username"
					placeholder="Username"
					className={styles.input}
				/>
				<input
					name="Password"
					placeholder="Password"
					className={styles.input}
				/>
				<button className={styles.logInBtn}>Log In</button>
				<a href="/" style={{ color: '#1877f2' }}>
					Forgot Password?
				</a>
				<button className={styles.signUpBtn}>Create New Account</button>
			</div>
		</div>
	);
}
