import Gallery from '../gallery/gallery'
import Project from '../project/project'
import styles from './portfolio.module.css'

export default function Portfolio({ projects }) {
  return (
    <section id="portafolio" className={styles.container}>
      <h2 className={styles.title}>Portafolio</h2>
      <Gallery>
        {projects.map((project) => (
          <Project key={project.uuid} data={project} />
        ))}
      </Gallery>
    </section>
  )
}
