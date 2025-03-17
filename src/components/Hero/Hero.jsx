// import React from "react";
// import styles from "./Hero.module.css";


// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, I'm Tirth</h1>
//         <p className={styles.description}>I'm currently learning React</p>
//         <a href="Tirth_resume.pdf" download="Tirth Resume.pdf" className={styles.resumeBtn}>
//           Resume
//         </a>
//       </div>
//       <img src="/assets/hero/tirth.png" alt="Tirth Chapla" className={styles.heroImg} />
//       <div className={styles.topBlur}></div>
//       <div className={styles.bottomBlur}></div>

     
//     </section>
//   );
// };

import React from "react";

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tirth</h1>
        <p className={styles.description}>I'm currently learning React</p>
        <a href="Tirth_resume.pdf" download="Tirth Resume.pdf" className={styles.resumeBtn}>
          Resume
        </a>
      </div>
      <img
        src="/assets/hero/tirth.png" 
        alt="Tirth Chapla"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};