import Image from 'next/image'
import Link from 'next/link'
import styles from './project.module.css'

export default function Project({ data }) {
  const link = `/${encodeURIComponent(data.slug)}`

  return (
    <article className={styles.container}>
      <Link href={link}>
        <Image
          priority
          className={styles.image}
          src={data.cover.src}
          alt={data.cover.alt}
          width={data.cover.width}
          height={data.cover.height}
        />
      </Link>
      <h3 className={styles.name}>{data.name}</h3>
    </article>
  )
}
