import classNames from 'classnames'
import styles from './logo.module.css'

export default function Logo({ className, ...props }) {
  const anchorClass = classNames(styles.logo, className)

  return (
    <a className={anchorClass} href="https://modalmilk.art" {...props}>
      ModalMilk
    </a>
  )
}
