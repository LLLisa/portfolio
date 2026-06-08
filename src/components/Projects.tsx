import { projects } from '../data/content';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section className="section" id="work">
            <div className={styles.header}>
                <div>
                    <p className="eyebrow reveal">Selected Work</p>
                    <h2 className="section-title reveal" data-reveal-delay="60">
                        Things I've built.
                    </h2>
                </div>
                <a
                    className={`${styles.allLink} reveal`}
                    data-reveal-delay="120"
                    href="https://github.com/LLLisa"
                    target="_blank"
                    rel="noreferrer"
                >
                    All projects on GitHub ↗
                </a>
            </div>

            <div className={styles.grid}>
                {projects.map((p, i) => (
                    <article
                        key={p.name}
                        className={`${styles.card} ${p.featured ? styles.featured : ''} reveal`}
                        data-reveal-delay={(i % 3) * 90}
                        style={{ ['--card-accent' as string]: p.accent ?? 'var(--accent)' }}
                    >
                        <div className={styles.cardTop}>
                            <span className={styles.index}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className={styles.cardLinks}>
                                {p.href && (
                                    <a href={p.href} target="_blank" rel="noreferrer">
                                        Live ↗
                                    </a>
                                )}
                                {p.repo && (
                                    <a href={p.repo} target="_blank" rel="noreferrer">
                                        Code ↗
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className={styles.name}>{p.name}</h3>
                        <p className={styles.blurb}>{p.blurb}</p>

                        <ul className={styles.tags}>
                            {p.tags.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
