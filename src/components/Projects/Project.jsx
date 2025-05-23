import projects from "../../Data/project.json";
import { ProjectCard } from "./ProjectCard";

import styles from "./Project.module.css"

export const Project =()=>
{
    return(<section className={styles.container} id="Project">

        <h2 className={styles.title} >Projects</h2>
        <div className={styles.projects}>{
            
            projects.map((project , id)=>
                {
                   return  <ProjectCard key={id} project={project} />
                })  
            
            
        }</div>
    </section>);
}