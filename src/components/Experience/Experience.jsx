// import React from "react";
// import history from "../../Data/history.json";
// import styles from "./Experience.module.css";

// const Experience = () => {
//   return (
//     <section id="experience" className={styles.container}>
//       <h2 className={styles.title}>Experience</h2>

//       <div className={styles.timeline}>
//         {history.map((item, i) => (
//           <div className={styles.timelineItem} key={i}>
//             {/* Date */}
//             <div className={styles.timelineDate}>
//               {item.startDate} - {item.endDate}
//             </div>

//             {/* Content */}
//             <div className={styles.timelineContent}>
//               {item.imageSrc && (
//                 <img
//                   src={item.imageSrc}
//                   alt={item.organisation}
//                   className={styles.image}
//                 />
//               )}
//               <h3 className={styles.heading}>
//                 {item.role && `${item.role} `}
//                 {item.organisation}
//               </h3>
//               <ul>
//                 {item.experiences.map((exp, idx) => (
//                   <li key={idx}>{exp}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;



// import React from "react";
// import styles from "./Experience.module.css";
// import history from "../../Data/history.json";

// const Experience = () => {
//   return (
//     <section id="experience" className={styles.section}>
//       <h2 className={styles.title}>Experience</h2>

//       <div className={styles.timeline}>
//         {history.map((item, i) => (
//           <div
//             key={i}
//             className={`${styles.timelineItem} ${
//               i % 2 === 0 ? styles.left : styles.right
//             }`}
//           >
//             {/* Icon + date */}
//             <div className={styles.iconWrapper}>
//               <div className={styles.icon}></div>
//               <span className={styles.date}>
//                 {item.startDate} - {item.endDate}
//               </span>
//             </div>

//             {/* Content box */}
//             <div className={styles.content}>
//               {item.imageSrc && (
//                 <div className={styles.imageWrapper}>
//                   <img
//                     src={item.imageSrc}
//                     alt={item.organisation}
//                     className={styles.orgImage}
//                   />
//                 </div>
//               )}
//               <h3>
//                 {item.role && <span>{item.role}</span>} {item.organisation}
//               </h3>
//               <ul className={styles.experienceList}>
//                 {item.experiences.map((exp, idx) => (
//                   <li key={idx}>{exp}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React from "react";
import styles from "./Experience.module.css";
import history from "../../Data/history.json";

export default function ExperienceTimeline() {
  return (
    <div className={styles.timelineContainer} id="Experience">
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {history.map((exp, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.logoWrapper}>
              <img src={exp.imageSrc} alt={exp.organisation} />
            </div>
            <div className={styles.content}>
              <h3>{exp.organisation}</h3>
              <ul>
                {exp.experiences.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.date}>
              {exp.startDate} - {exp.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
