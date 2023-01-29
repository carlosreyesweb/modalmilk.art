import Image from 'next/image'
import Instagram from '../../../public/instagram-icon.svg'
import Kofi from '../../../public/kofi-icon.svg'
import Twitter from '../../../public/twitter-icon.svg'
import styles from './social-link.module.css'

const socialIcons = { Instagram, Twitter, Kofi }

export default function SocialLink({ link, media }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      title={media}
    >
      <Image alt={media} src={socialIcons[media]} className={styles.icon} />
    </a>
  )
}
