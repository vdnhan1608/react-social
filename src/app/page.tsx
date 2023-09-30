import Image from 'next/image';
import Link from 'next/link';
import { Topbar } from './components/Topbar';

import styles from './layouts/Home.module.css';
export default function Home() {
	// return (
	// 	<main className="flex min-h-screen flex-col items-center justify-between p-24">
	// 		<Link href="/login">Login</Link>
	// 	</main>
	// );
	return (
		<div className={styles.containter}>
			<Topbar />
		</div>
	);
}
