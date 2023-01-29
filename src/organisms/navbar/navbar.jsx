import Logo from '@/molecules/logo/logo'
import Navigation from '@/molecules/navigation/navigation'
import SocialMedia from '@/molecules/social-media/social-media'
import styles from './navbar.module.css'

export default function Navbar(props) {
  return (
    <nav className={styles.container}>
      <Logo className={styles.logo} withLink />
      <SocialMedia />
      <Navigation />
    </nav>
  )
}
