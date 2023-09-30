import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from '../layouts/Topbar.module.css';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

export function Topbar() {
	return (
		<div className={styles.container}>
			<h1>Social</h1>
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
					<PersonIcon />
					<ChatIcon />
					<NotificationsIcon />
					<Image
						src="/images/avatar.png"
						alt="avatar-image"
						width={50}
						height={50}
					/>
				</div>
			</div>
		</div>
	);
}
