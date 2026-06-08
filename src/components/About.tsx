import { profile, stats } from '../data/content';
import styles from './About.module.css';

export default function About() {
    return (
        <section className="section" id="about">
            <div className={styles.layout}>
                <div className={styles.lead}>
                    <p className="eyebrow reveal">About</p>
                    <h2 className={`section-title ${styles.title} reveal`} data-reveal-delay="60">
                        Engineering that puts people first — and ships.
                    </h2>
                </div>

                <div className={styles.body}>
                    {profile.intro.map((para, i) => (
                        <p
                            key={i}
                            className={`${styles.para} reveal`}
                            data-reveal-delay={120 + i * 80}
                        >
                            {para}
                        </p>
                    ))}
                </div>
            </div>

            <ul className={styles.stats}>
                {stats.map((s, i) => (
                    <li
                        key={s.label}
                        className={`${styles.stat} reveal`}
                        data-reveal-delay={i * 90}
                    >
                        <span className={styles.statValue}>{s.value}</span>
                        <span className={styles.statLabel}>{s.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
