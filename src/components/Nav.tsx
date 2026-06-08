import { useEffect, useState } from 'react';
import { links } from '../data/content';
import styles from './Nav.module.css';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#top" className={styles.brand} aria-label="Lisa Anne Knox — home">
                    <span className={styles.mark}>LK</span>
                    <span className={styles.brandName}>Lisa Anne Knox</span>
                </a>

                <nav className={styles.links} aria-label="Primary">
                    {sections.map((s) => (
                        <a key={s.id} href={`#${s.id}`}>
                            {s.label}
                        </a>
                    ))}
                </nav>

                <a
                    className={styles.cta}
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
        </header>
    );
}
