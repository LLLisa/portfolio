import { experience } from '../data/content';
import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section className="section" id="experience">
            <p className="eyebrow reveal">Experience</p>
            <h2 className="section-title reveal" data-reveal-delay="60">
                Where I've shipped.
            </h2>

            <ol className={styles.list}>
                {experience.map((job, i) => (
                    <li
                        key={job.company}
                        className={`${styles.item} reveal`}
                        data-reveal-delay={i * 80}
                    >
                        <div className={styles.head}>
                            <div className={styles.titleRow}>
                                <h3 className={styles.company}>{job.company}</h3>
                                {job.current && <span className={styles.badge}>Current</span>}
                            </div>
                            <span className={styles.period}>{job.period}</span>
                        </div>
                        <p className={styles.role}>{job.role}</p>
                        <ul className={styles.points}>
                            {job.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    );
}
