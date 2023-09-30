import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from '../layouts/Topbar.module.css';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

export function Topbar() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Social</h1>
			<div className={styles.leftContainer}>
				<div className={styles.searchHomepageTimelineContainer}>
					<div className={styles.searchBar}>
						<SearchIcon style={{ color: '#000000' }} />
						<input
							name="search-bar"
							placeholder="Search for friend, post or video"
							className={styles.input}
						/>
					</div>

					<div className={styles.homepageTimelineContainer}>
						<a href="/">Homepage</a>
						<a href="/">Timeline</a>
					</div>
				</div>

				<div className={styles.friendMessageNotificationAvatarContainer}>
					<div className={styles.notificationContainer}>
						<div className={styles.notificationBadgeContainer}>
							<PersonIcon />
							<div className={styles.badge}>10</div>
						</div>
						<div className={styles.notificationBadgeContainer}>
							<ChatIcon />
							<div className={styles.badge}>12</div>
						</div>
						<div className={styles.notificationBadgeContainer}>
							<NotificationsIcon />
							<div className={styles.badge}>99</div>
						</div>
					</div>

					<Image
						src="/images/avatar.png"
						alt="avatar-image"
						width={50}
						height={50}
						className={styles.image}
					/>
				</div>
			</div>
		</div>
	);
}
