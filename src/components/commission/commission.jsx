import { useLightbox } from '@/hooks/use-lightbox'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import { Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import Button from '../button/button'
import styles from './commission.module.css'

const priceFormatter = new Intl.NumberFormat('es', {
  currency: 'USD',
  style: 'currency',
})

export default function Commission({
  title,
  price,
  images,
  btnText = 'Consultar',
}) {
  const lb = useLightbox(images)
  const cover = images[0]
  const formattedPrice = priceFormatter.format(price)

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.price}>{formattedPrice}</h3>
      <Image
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        className={styles.image}
        onClick={() => lb.openLightbox(0)}
        title="Haz clic para ver todos los ejemplos"
      />
      <Button>{btnText}</Button>
      <Lightbox
        slides={lb.slides}
        close={lb.closeLightbox}
        open={lb.open}
        index={lb.index}
        plugins={[Zoom, Thumbnails]}
        thumbnails={{ border: 0, imageFit: 'cover' }}
      />
    </article>
  )
}
