import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import styles from './portfolio.module.css'
import { useLightbox } from './use-lightbox'

export default function Portfolio({ illustrations }) {
  const lb = useLightbox(illustrations)

  return (
    <section id="#portafolio" className={styles.container}>
      <h2 className={styles.title}>Portafolio</h2>
      <div className={styles.grid}>
        {illustrations.map((illustration, index) => (
          <article
            className={styles.gridItem}
            key={illustration.uuid}
            onClick={() => lb.openLightbox(index)}
          >
            <Image
              src={illustration.image}
              alt={illustration.name}
              title={illustration.name}
              className={styles.image}
              width={illustration.width}
              height={illustration.height}
              priority
            />
          </article>
        ))}
      </div>
      <Lightbox
        index={lb.index}
        open={lb.open}
        close={lb.closeLightbox}
        slides={lb.slides}
      />
    </section>
  )
}
