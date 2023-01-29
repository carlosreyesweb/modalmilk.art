import SocialLink from '@/atoms/social-link/social-link'
import styles from './social-media.module.css'

export default function SocialMedia(props) {
  return (
    <ul className={styles.list}>
      <li>
        <SocialLink link="https://instagram.com/modalmilk" media="instagram" />
      </li>
      <li>
        <SocialLink link="" media="twitter" />
      </li>
      <li>
        <SocialLink link="" media="kofi" />
      </li>
    </ul>
  )
}
