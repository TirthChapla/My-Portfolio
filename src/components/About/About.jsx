
import React from "react";

import styles from "./About.module.css"
export const About = ()=>
{
    return(<section className={styles.container} id="About">
    
        <h2 className={styles.title}>About</h2>
        
        <div className={styles.content}>
        <img src="/assets/about/rocket.png" alt="About" className={styles.aboutImage} />


        <ul className={styles.aboutList}>
            <li className={styles.aboutItem}>
                <img src="/assets/about/uiIcon.png" alt="Cursoricon" />
                <div className={styles.aboutItemText}>
                    <h3>Member Of Decrypters Codding Club</h3>
                    <p>I am the member of this club and organising events related to Competative Programming.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src="/assets/about/cursorIcon.png" alt="Cursoricon" />
                <div className={styles.aboutItemText}>
                    <h3>Learning React</h3>
                    <p>I'm currently learning react through the small projects and mastering it.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src="/assets/about/serverIcon.png" alt="Cursoricon" />
                <div className={styles.aboutItemText}>
                    <h3>Data Structure and Algorithm</h3>
                    <p>I'm currently mastering Data Structure and Algorithm by practicing consistency</p>
                </div>
            </li>

        </ul>




        </div>
    
    </section>)
}