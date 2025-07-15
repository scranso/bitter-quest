import Link from 'next/link';
import styles from './navbar.module.css'; // Optional: for styling

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}
