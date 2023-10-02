import Image from 'next/image';
import styles from '../layouts/StatusBox.module.css';
import CollectionsIcon from '@mui/icons-material/Collections';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export function StatusBox() {
	return (
		<div className={styles.container}>
			<div className={styles.statusContainer}>
				<Image
					src="/images/avatar.png"
					alt="avatar"
					width={60}
					height={60}
					className={styles.image}
				/>
				{/* <h1>What's in your mind Duy Nhan?</h1> */}
				<input
					name="status"
					placeholder="What's in your mind Duy Nhan?"
					className={styles.input}
				/>
			</div>
			<div className={styles.line}></div>
			<div className={styles.postingFeaturesContainer}>
				<div className={styles.postingFeatureContainer}>
					<CollectionsIcon style={{ color: '#45bd62' }} />
					<h1>Photo/Videos</h1>
				</div>
				<div className={styles.postingFeatureContainer}>
					<LabelIcon style={{ color: '#1b74e4' }} />
					<h1>Tag</h1>
				</div>
				<div className={styles.postingFeatureContainer}>
					<LocationOnIcon style={{ color: '#45bd62' }} />
					<h1>Location</h1>
				</div>
				<div className={styles.postingFeatureContainer}>
					<EmojiEmotionsIcon style={{ color: '#f7b928' }} />
					<h1>Feelings</h1>
				</div>
				<button className={styles.shareButton}>Share</button>
			</div>
		</div>
	);
}
