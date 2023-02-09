import Image from 'next/image'
import styles from './illustration.module.css'

export default function Illustration({ data, onClick }) {
  return (
    <article className={styles.container} onClick={onClick}>
      <Image
        src={data.src}
        alt={data.name}
        title={data.name}
        className={styles.image}
        width={data.width}
        height={data.height}
        priority
      />
    </article>
  )
}
