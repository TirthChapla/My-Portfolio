import React from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";


export const Experience = () => {
    return (
        <section className={styles.container} id="Experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <li key={id} className={styles.historyItem}>
                            <img src={historyItem.imageSrc} alt={historyItem.organisation} />
                            <div className={styles.historyItemContainer}>
                                <div className={styles.historyItemDetails}>
                                    <h3>{historyItem.role} {historyItem.organisation}</h3>
                                </div>
                                <p>{historyItem.startDate} - {historyItem.endDate}</p>
                                <ul>
                                    {historyItem.experiences.map((exp, expId) => (
                                        <li key={expId}>{exp}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
                
      
    
            </div>
        </section>
    );
};