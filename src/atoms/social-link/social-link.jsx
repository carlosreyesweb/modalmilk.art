import Image from 'next/image'
import instagram from '../../../public/instagram-icon.svg'
import kofi from '../../../public/kofi-icon.svg'
import twitter from '../../../public/twitter-icon.svg'
import styles from './social-link.module.css'

const socialIcons = { instagram, twitter, kofi }

export default function SocialLink({ link, media, ...props }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <Image alt={media} src={socialIcons[media]} />
    </a>
  )
}
