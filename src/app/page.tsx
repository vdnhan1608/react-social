import Image from 'next/image';
import Link from 'next/link';
import { Topbar } from './components/Topbar';

import styles from './layouts/Home.module.css';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';

export default function Home() {
	return (
		<div className={styles.containter}>
			<Topbar />
			<Sidebar />
			<Feed />
			<Rightbar />
		</div>
	);
}
