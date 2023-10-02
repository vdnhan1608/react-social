import styles from '../layouts/Feed.module.css';
import { StatusBox } from './StatusBox';

export function Feed() {
	return (
		<div className={styles.container}>
			<StatusBox />
		</div>
	);
}
