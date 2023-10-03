import styles from '../layouts/Feed.module.css';
import { Post } from './Post';
import { StatusBox } from './StatusBox';

export function Feed() {
	return (
		<div className={styles.container}>
			<StatusBox />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}
