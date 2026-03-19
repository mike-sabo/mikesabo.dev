import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Personal Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              key={project.id}
              id={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {project.image && (
                <div className={styles.cardImage}>
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
              )}
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.stack}>
                  {project.stack.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.links}>
                <a
                  className={styles.link}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={13} /> {project.github.replace("https://github.com/", "")}
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
