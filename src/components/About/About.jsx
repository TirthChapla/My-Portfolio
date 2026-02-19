import React from "react";
import styles from "./About.module.css";
import { ImPointRight } from "react-icons/im";

export const About = () => {
  return (
    <section className={styles.aboutSection} id="About">
      <div className={styles.leftColumn}>
        <h2 className={styles.heading}>
          ABOUT <span className={styles.purple}>ME</span>
        </h2>

        <p className={styles.intro}>
          Hi Everyone, I am <span className={styles.purpleBold}>Chapla Tirth</span> from{" "}
          <span className={styles.purpleBold}>Junagadh, India.</span>
          <br />
          I am Pre-Final year student of IT at Dharmsinh Desai University.
        </p>

        <div className={styles.skillsRow}>
          <span className={styles.white}>Skills:</span>{" "}
          <span className={styles.gray}>[</span>
          <span className={styles.amber}>Java</span>
          <span className={styles.gray}>, </span>
          <span className={styles.amber}>Springboot</span>
          <span className={styles.gray}>, </span>
          <span className={styles.amber}>React</span>
          <span className={styles.gray}>]</span>
        </div>

        <p className={styles.subIntro}>
          Am I consistent ?
        </p>

       <ul className={styles.activityList}>
  <li>
    <ImPointRight className={styles.icon} /> 
    <span style={{ color: "red", fontWeight: "bold" }}>415+</span> days streak on GitHub
  </li>
  <li>
    <ImPointRight className={styles.icon} /> 
    <span style={{ color: "red", fontWeight: "bold" }}>115+</span> days streak on CodeChef
  </li>
  <li>
    <ImPointRight className={styles.icon} /> 
    <span style={{ color: "red", fontWeight: "bold" }}>150+</span> days streak on LeetCode
  </li>
</ul>


        

        <p className={styles.quote}>
          "Striving for Excellence Through Consistency!"
        </p>
        <footer className={styles.footer}>— Chapla Tirth</footer>
      </div>

      <pre className={styles.codeBlock}>
        <code>
          <span className={styles["token-keyword"]}>const</span> coder{" "}
          <span className={styles["token-operator"]}>=</span> {"{"}
          {"\n  "}
          <span className={styles["token-property"]}>name</span>:{" "}
          <span className={styles["token-string"]}>'Chapla Tirth'</span>,
          {"\n  "}
          <span className={styles["token-property"]}>skills</span>: [
          <span className={styles["token-string"]}>'Java'</span>,{" "}
          <span className={styles["token-string"]}>'Spring'</span>,{" "}
          <span className={styles["token-string"]}>'Spring-Boot'</span>,{" "}
          <span className={styles["token-string"]}>'Microservices'</span>,{" "}
          <span className={styles["token-string"]}>'React'</span>,{" "}
          <span className={styles["token-string"]}>'MySql'</span>,{" "}
          <span className={styles["token-string"]}>'MongoDB'</span>,{" "}
          <span className={styles["token-string"]}>'Docker'</span>,{" "}
          <span className={styles["token-string"]}>'AWS'</span>
          ],
          {"\n  "}
          <span className={styles["token-property"]}>hardWorker</span>:{" "}
          <span className={styles["token-boolean"]}>true</span>,
          {"\n  "}
          <span className={styles["token-property"]}>consistent</span>:{" "}
          <span className={styles["token-boolean"]}>true</span>,
          {"\n  "}
          <span className={styles["token-property"]}>problemSolver</span>:{" "}
          <span className={styles["token-boolean"]}>true</span>,
          {"\n  "}
          <span className={styles["token-property"]}>hireable</span>:{" "}
          <span className={styles["token-function"]}>function</span>() {"{"}
          {"\n    "}return (
          {"\n      "}
          <span className={styles["token-this"]}>this</span>.hardWorker{" "}
          <span className={styles["token-operator"]}>&&</span>{" "}
          <span className={styles["token-this"]}>this</span>.problemSolver{" "}
          <span className={styles["token-operator"]}>&&</span>{" "}
          <span className={styles["token-this"]}>this</span>.skills.length{" "}
          <span className={styles["token-operator"]}>&gt;=</span>{" "}
          <span className={styles["token-number"]}>5🌟</span>
          {"\n    "});
          {"\n  "}&#125;
          {"\n"}
          &#125;;
        </code>
      </pre>
    </section>
  );
};

export default About;






















// import React from "react";
// import styles from "./About.module.css";
// import { ImPointRight } from "react-icons/im";

// export const About = () => {
//   return (
//     <section className={styles.aboutSection} id="about">
//       <div className={styles.leftColumn}>
//         <h2 className={styles.heading}>
//           Know Who <span className={styles.purple}>I'M</span>
//         </h2>

//         <p className={styles.intro}>
//           Hi Everyone, I am <span className={styles.purple}>Chapla Tirth</span> from{" "}
//           <span className={styles.purple}>Bhubaneswar, India.</span>
//           <br />
//           I am currently student of IT at Dharmsinh Desai University.
//           <br />

//         </p>

//         <p className={styles.subIntro}>
//           Apart from coding, some other activities that I love to do!
//         </p>

//         <ul className={styles.activityList}>
//           <li>
//             <ImPointRight className={styles.icon} /> Waching Movies
//           </li>
//           <li>
//             <ImPointRight className={styles.icon} /> Playing Badmintion
//           </li>
//           <li>
//             <ImPointRight className={styles.icon} /> Travelling
//           </li>
//         </ul>

//         <p className={styles.quote}>
//           "Striving for Excellence Through Consistency!"
//         </p>
//         <footer className={styles.footer}>— Chapla Tirth</footer>
//       </div>

//       <div className={styles.rightColumn}>
//         <img
//           src="/assets/about/rocket.png"
//           alt="About illustration"
//           className={styles.image}
//         />
//       </div>
//     </section>
//   );
// };

// export default About;


























// import React from "react";

// import styles from "./About.module.css"
// export const About = ()=>
// {
//     return(<section className={styles.container} id="About">
    
//         <h2 className={styles.title}>About</h2>
        
//         <div className={styles.content}>
//         <img src="/assets/about/rocket.png" alt="About" className={styles.aboutImage} />
         
            

//         <ul className={styles.aboutList}>
//             <li className={styles.aboutItem}>
//                 <img src="/assets/about/uiIcon.png" alt="Cursoricon" />
//                 <div className={styles.aboutItemText}>
//                     <h3>Member Of Decrypters Codding Club</h3>
//                     <p>I am the member of this club and organising events related to Competative Programming.</p>
//                 </div>
//             </li>
//             <li className={styles.aboutItem}>
//                 <img src="/assets/about/cursorIcon.png" alt="Cursoricon" />
//                 <div className={styles.aboutItemText}>
//                     <h3>Learning React</h3>
//                     <p>I'm currently learning react through the small projects and mastering it.</p>
//                 </div>
//             </li>
//             <li className={styles.aboutItem}>
//                 <img src="/assets/about/serverIcon.png" alt="Cursoricon" />
//                 <div className={styles.aboutItemText}>
//                     <h3>Data Structure and Algorithm</h3>
//                     <p>I'm currently mastering Data Structure and Algorithm by practicing consistency</p>
//                 </div>
//             </li>

//         </ul>




//         </div>
    
//     </section>)
// }