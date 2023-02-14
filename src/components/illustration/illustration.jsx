import Image from 'next/image'
import styles from './illustration.module.css'

export default function Illustration({ data, onClick }) {
  return (
    <article className={styles.container} onClick={onClick}>
      <Image
        src={data.src}
        alt={data.alt}
        title="Haz clic para ver la imagen completa"
        className={styles.image}
        width={data.width}
        height={data.height}
        priority
      />
    </article>
  )
}
