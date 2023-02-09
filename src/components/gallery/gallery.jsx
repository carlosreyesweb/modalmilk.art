import styles from './gallery.module.css'

export default function Gallery({ children }) {
  return <div className={styles.grid}>{children}</div>
}
