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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll and close on Escape while the mobile menu is open.
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <header className={`${styles.nav} ${scrolled || open ? styles.scrolled : ''}`}>
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

                <button
                    type="button"
                    className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span />
                    <span />
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
                hidden={!open}
            >
                <nav aria-label="Mobile">
                    {sections.map((s) => (
                        <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
                            {s.label}
                        </a>
                    ))}
                    <a
                        href={links.resume}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        Résumé ↓
                    </a>
                    <a href={links.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                    </a>
                </nav>
            </div>
        </header>
    );
}
