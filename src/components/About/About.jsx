import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="About">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={`${process.env.PUBLIC_URL}/assets/about/rocket.png`} alt="About" className={styles.aboutImage} />
                <ul className={styles.aboutList}>
                    <li className={styles.aboutItem}>
                        <img src={`${process.env.PUBLIC_URL}/assets/about/uiIcon.png`} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Member Of Decrypters Coding Club</h3>
                            <p>I am the member of this club and organizing events related to Competitive Programming.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={`${process.env.PUBLIC_URL}/assets/about/cursorIcon.png`} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Learning React</h3>
                            <p>I'm currently learning React through small projects and mastering it.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={`${process.env.PUBLIC_URL}/assets/about/serverIcon.png`} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Structure and Algorithm</h3>
                            <p>I'm currently mastering Data Structure and Algorithm by practicing consistently.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};