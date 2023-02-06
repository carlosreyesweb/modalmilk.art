import SocialLink from '@/components/social-link/social-link'
import classNames from 'classnames'
import styles from './social-media.module.css'

export default function SocialMedia({ className }) {
  const ulClass = classNames(className, styles.list)

  return (
    <nav>
      <ul className={ulClass}>
        <li>
          <SocialLink
            link="https://instagram.com/modalmilk"
            media="Instagram"
          />
        </li>
        <li>
          <SocialLink link="" media="Twitter" />
        </li>
        <li>
          <SocialLink link="" media="Kofi" />
        </li>
      </ul>
    </nav>
  )
}
