import { profile, links } from '../data/content';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className={styles.card}>
                <div className={styles.glow} aria-hidden="true" />
                <p className="eyebrow reveal">Contact</p>
                <h2 className={`${styles.title} reveal`} data-reveal-delay="60">
                    Let's build something
                    <br />
                    worth shipping.
                </h2>
                <p className={`${styles.sub} reveal`} data-reveal-delay="120">
                    Open to full-stack and AI-engineering work. The fastest way to reach me is
                    email.
                </p>

                <a className={`${styles.email} reveal`} data-reveal-delay="180" href={links.email}>
                    {profile.email}
                </a>

                <div className={`${styles.row} reveal`} data-reveal-delay="240">
                    <a href={links.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                    </a>
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn ↗
                    </a>
                    <a href={links.npm} target="_blank" rel="noreferrer">
                        npm ↗
                    </a>
                    <a href={links.resume} target="_blank" rel="noreferrer">
                        Résumé ↓
                    </a>
                </div>
            </div>
        </section>
    );
}
