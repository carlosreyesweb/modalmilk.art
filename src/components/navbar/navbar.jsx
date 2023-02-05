import Logo from '@/components/logo/logo'
import Navigation from '@/components/navigation/navigation'
import SocialMedia from '@/components/social-media/social-media'
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
