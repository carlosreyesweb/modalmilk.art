import SocialMedia from '../social-media/social-media'
import styles from './footer.module.css'

export default function Footer(props) {
  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>
        &copy; 2023 | ModalMilk | hecho con &hearts; por{' '}
        <a
          href="https://carlosreyesweb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          carlosreyesweb
        </a>
        .
      </p>
      <SocialMedia />
    </footer>
  )
}
