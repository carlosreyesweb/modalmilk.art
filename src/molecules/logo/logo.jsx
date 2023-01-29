import classNames from 'classnames'
import styles from './logo.module.css'

export default function Logo({ className, withLink, ...props }) {
  const h1Class = classNames(styles.logo, className)

  return (
    <h1 className={h1Class} {...props}>
      {withLink ? (
        <a className={styles.innerLink} href="https://modalmilk.art">
          ModalMilk
        </a>
      ) : (
        'ModalMilk'
      )}
    </h1>
  )
}
