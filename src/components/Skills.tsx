import { skills } from '../data/content';
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section className="section" id="skills">
            <p className="eyebrow reveal">Toolkit</p>
            <h2 className="section-title reveal" data-reveal-delay="60">
                What I work with.
            </h2>

            <div className={styles.grid}>
                {skills.map((group, i) => (
                    <div
                        key={group.label}
                        className={`${styles.group} reveal`}
                        data-reveal-delay={i * 70}
                    >
                        <h3 className={styles.label}>{group.label}</h3>
                        <ul className={styles.items}>
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
