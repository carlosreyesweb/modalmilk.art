import Lightbox from 'yet-another-react-lightbox'
import { Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import Gallery from '../gallery/gallery'
import Illustration from '../illustration/illustration'
import styles from './illustrations.module.css'
import { useLightbox } from './use-lightbox'

export default function Illustrations({ data }) {
  const lb = useLightbox(data.images)

  return (
    <section className={styles.container}>
      <Gallery>
        {data.images.map((img, index) => (
          <Illustration
            key={img.id}
            data={img}
            onClick={() => lb.openLightbox(index)}
          />
        ))}
      </Gallery>
      <Lightbox
        open={lb.open}
        close={lb.closeLightbox}
        index={lb.index}
        slides={lb.slides}
        plugins={[Thumbnails]}
        thumbnails={{ border: 0, imageFit: 'cover' }}
      />
    </section>
  )
}
