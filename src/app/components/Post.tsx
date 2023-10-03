import Image from 'next/image';
import styles from '../layouts/Post.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
export function Post() {
	return (
		<div className={styles.container}>
			<div className={styles.headContainer}>
				<div className={styles.infoContainer}>
					<Image
						src="/images/avatar.png"
						alt="image"
						width={40}
						height={40}
						className={styles.avatar}
					/>
					<h1>Vo Duy Nhan</h1>
					<h2>5 mins ago</h2>
				</div>
				<MoreVertIcon />
			</div>
			<div className={styles.bodyContainer}>
				<h1>Hey it is my first post</h1>
				<div className={styles.image}>
					<Image
						src="/images/train-station.jpg"
						alt="image"
						width={500}
						height={500}
					/>
				</div>
			</div>
			<div className={styles.footerContainer}>
				<div className={styles.statContainer}>
					<ThumbUpIcon style={{ color: '#0571ed' }} />
					<FavoriteIcon style={{ color: '#f95571' }} />
					<h1>32 people like it</h1>
				</div>
				<h1>9 comments</h1>
			</div>
		</div>
	);
}
