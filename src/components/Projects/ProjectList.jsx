import projects from "../../Data/project.json";
import { ProjectList } from "./ProjectCard"; // ✅ Import ProjectList, not ProjectCard
import styles from "./Project.module.css";

export const Project = () => {
  return (
    <section className={styles.container} id="Project">
      <h2 className={styles.title}>Projects</h2>

      {/* ✅ Pass all projects to ProjectList */}
      <div className={styles.projects}>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};
