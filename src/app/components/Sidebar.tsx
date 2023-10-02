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
import Image from 'next/image';

export function Sidebar() {
	return (
		<div className={styles.container}>
			<div className={styles.featuresContainer}>
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
				<button className={styles.showMoreBtn}>Show more</button>
			</div>
			<div className={styles.friendListContainer}>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_1"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 1</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_2"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 2</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_3"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 3</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_4"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 4</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_5"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 5</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_6"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 6</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_7"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 7</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_8"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 8</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_9"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 9</h1>
				</div>
				<div className={styles.friendContainer}>
					<Image
						src="/images/friend_2.jpg"
						alt="friend_10"
						width={70}
						height={70}
						className={styles.image}
					/>
					<h1> Friend 10</h1>
				</div>
			</div>
		</div>
	);
}
