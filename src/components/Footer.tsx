import { profile } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
    const year = 2026;
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.name}>{profile.name}</span>
                <span className={styles.meta}>
                    © {year} · Built with React, Vite & TypeScript · {profile.location}
                </span>
                <a href="#top" className={styles.top}>
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
