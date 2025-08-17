import React from "react";
import skillsData from "../../Data/skills.json";
import Marquee from "react-fast-marquee";
import styles from "./Skills.module.css";

function Skills() {
  // duplicate list to remove gap in marquee
  const marqueeSkills = [...skillsData, ...skillsData];

  return (
    <div id="skills" className={styles.skillsContainer}>
      <div className={styles.blurCircle}></div>

      <div className={styles.centerLine}>
        <div className={styles.gradientLine}></div>
      </div>

      <div className={styles.skillsTitleWrapper}>
        <span className={styles.titleLine}></span>
        <span className={styles.titleBox}>Skills</span>
        <span className={styles.titleLine}></span>
      </div>

      <div className={styles.marqueeWrapper}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {marqueeSkills.map((skill, id) => (
            <div className={styles.skillCard} key={`${skill.title}-${id}`}>
              <div className={styles.skillInner}>
                <div className={styles.gradientLine}></div>
                <div className={styles.skillContent}>
                  <div className={styles.skillImage}>
                    <img
                      src={skill.imageSrc}
                      alt={skill.title}
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.skillName}>{skill.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
