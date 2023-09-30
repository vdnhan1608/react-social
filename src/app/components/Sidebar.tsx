import styles from '../layouts/Sidebar.module.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export function Sidebar() {
	return (
		<div className={styles.container}>
			<div className={styles.featureContainer}>
				<RssFeedIcon />
				<h1>Feed</h1>
			</div>
			<div className={styles.featureContainer}>
				<ChatIcon />
				<h1>Chats</h1>
			</div>
			<div className={styles.featureContainer}>
				<PlayCircleIcon />
				<h1>Video</h1>
			</div>
			<div className={styles.featureContainer}>
				<GroupIcon />
				<h1>Groups</h1>
			</div>
			<div className={styles.featureContainer}>
				<BookmarksIcon />
				<h1>Bookmarks</h1>
			</div>
			<div className={styles.featureContainer}>
				<HelpIcon />
				<h1>Questions</h1>
			</div>
			<div className={styles.featureContainer}>
				<WorkIcon />
				<h1>Jobs</h1>
			</div>
			<div className={styles.featureContainer}>
				<SchoolIcon />
				<h1>Schools</h1>
			</div>
		</div>
	);
}
