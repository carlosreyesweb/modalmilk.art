import Lightbox from 'yet-another-react-lightbox'
import { Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import Illustration from '../illustration/illustration'
import styles from './portfolio.module.css'
import { useLightbox } from './use-lightbox'

export default function Portfolio({ illustrations }) {
  const lb = useLightbox(illustrations)

  return (
    <section id="portafolio" className={styles.container}>
      <h2 className={styles.title}>Portafolio</h2>
      <div className={styles.grid}>
        {illustrations.map((illustration, index) => (
          <Illustration
            key={illustration.uuid}
            data={illustration}
            onClick={() => lb.openLightbox(index)}
          />
        ))}
      </div>
      <Lightbox
        index={lb.index}
        open={lb.open}
        close={lb.closeLightbox}
        slides={lb.slides}
        plugins={[Thumbnails]}
        thumbnails={{ imageFit: 'cover', border: 0 }}
      />
    </section>
  )
}
