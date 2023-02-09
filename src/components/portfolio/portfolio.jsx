import Image from 'next/image'
import { useEffect } from 'react'
import styles from './portfolio.module.css'

export default function Portfolio({ illustrations }) {
  useEffect(() => {
    console.log(illustrations)
  }, [illustrations])

  return (
    <section id="#portafolio" className={styles.container}>
      <h2 className={styles.title}>Portafolio</h2>
      <div className={styles.grid}>
        {illustrations.map((illustration) => (
          <article className={styles.gridItem} key={illustration.uuid}>
            <Image
              src={illustration.image}
              alt={illustration.name}
              title={illustration.name}
              className={styles.image}
              width={illustration.width}
              height={illustration.height}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
