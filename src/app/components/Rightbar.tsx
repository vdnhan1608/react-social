import Image from 'next/image';
import styles from '../layouts/Rightbar.module.css';
import CakeIcon from '@mui/icons-material/Cake';

const friends = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export function Rightbar() {
	return (
		<div className={styles.container}>
			<div className={styles.birthdayNotificationContainer}>
				<CakeIcon style={{ color: '#f95571' }} />
				<p>
					<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
				</p>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src="/images/birthday.jpg"
					alt="birthday"
					width={100}
					height={100}
					className={styles.image}
				/>
			</div>
			<div className={styles.footerContainer}>
				<h1>Online friend</h1>
				<div className={styles.onlineFriendList}>
					{friends.map((item, index) => (
						<div className={styles.onlineFriendInfoContainer} key={index}>
							<Image
								src="/images/avatar.png"
								alt="avatar"
								width={50}
								height={50}
								className={styles.avatar}
							/>
							<h1>Friend</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
