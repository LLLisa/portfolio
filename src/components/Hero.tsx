import { profile, links } from '../data/content';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.grid} aria-hidden="true" />

            <div className={styles.content}>
                <p className={`${styles.status} reveal`}>
                    <span className={styles.dot} />
                    Available for select projects
                </p>

                <h1 className={`${styles.name} reveal`} data-reveal-delay="80">
                    Lisa Anne
                    <br />
                    <span className={styles.outline}>Knox</span>
                </h1>

                <div className={`${styles.roleRow} reveal`} data-reveal-delay="160">
                    <span className={styles.role}>{profile.role}</span>
                    <span className={styles.sep}>/</span>
                    <span className={styles.loc}>{profile.location}</span>
                </div>

                <p className={`${styles.tagline} reveal`} data-reveal-delay="220">
                    {profile.tagline}
                </p>

                <div className={`${styles.actions} reveal`} data-reveal-delay="300">
                    <a className={styles.primary} href="#work">
                        View my work
                    </a>
                    <a className={styles.ghost} href={links.email}>
                        Get in touch
                    </a>
                    <a
                        className={styles.ghost}
                        href={links.resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Résumé ↓
                    </a>
                </div>

                <div className={`${styles.socials} reveal`} data-reveal-delay="360">
                    <a href={links.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href={links.npm} target="_blank" rel="noreferrer">
                        npm
                    </a>
                </div>
            </div>

            <a href="#about" className={styles.scroll} aria-label="Scroll to about">
                <span>Scroll</span>
                <span className={styles.scrollLine} />
            </a>
        </section>
    );
}
