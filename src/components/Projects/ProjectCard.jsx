
import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>

      <div className={styles.card}>
        <div className={styles.left}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.skills}>
            {project.skills.map((skill, idx) => (
              <span key={idx} className={styles.skillPill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img
              src={project.imageSrc}
              alt={project.title}
              className={styles.image}
            />
          </div>

          <div className={styles.buttons}>
            <a
              href={project.demo}
              className={styles.demoBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={project.source}
              className={styles.sourceBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// NEW — handles show only 3 then view more
export const ProjectList = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div>
      {visibleProjects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}

      {projects.length > 3 && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: "transparent",
              color: "#a5b4fc",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "999px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};











// import styles from "./ProjectCard.module.css"

// export const ProjectCard =({project})=>
//     {
//         return <div className={styles.container}>
//                         <img 
//                         src={project.imageSrc} 
//                         alt={project.title} 
//                         className={styles.image}
//                         />

//                         <h3 className={styles.title}>{project.title}</h3>
//                         <p className={styles.description}>{project.description}</p>
                        
//                         <ul className={styles.skills}>{
                            
//                             project.skills.map((skill,id)=>(
//                                 <li key={id} className={styles.skill}> {skill}</li>
//                             ))
//                         }</ul>
                        
//                         <div className={styles.links}>
//                             <a href={project.demo} className={styles.link} target="_blank">Demo</a>
//                             <a href={project.source} className={styles.link} target="_blank">Source</a>
//                         </div>
//                     </div>   
//     }