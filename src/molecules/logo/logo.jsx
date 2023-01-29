import classNames from 'classnames'
import styles from './logo.module.css'

export default function Logo({ className, ...props }) {
  const h1Class = classNames(styles.logo, className)

  return (
    <h1 className={h1Class} {...props}>
      <a className={styles.innerLink} href="https://modalmilk.art">ModalMilk</a>
    </h1>
  )
}
