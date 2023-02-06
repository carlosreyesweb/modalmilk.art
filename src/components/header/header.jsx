import Logo from '@/components/logo/logo'
import Navigation from '@/components/navigation/navigation'
import styles from './header.module.css'

export default function Header(props) {
  return (
    <header className={styles.container}>
      <Logo className={styles.logo} />
      <Navigation />
    </header>
  )
}
