import classNames from 'classnames'
import Link from 'next/link'
import styles from './logo.module.css'

export default function Logo({ className }) {
  const anchorClass = classNames(styles.logo, className)

  return (
    <Link className={anchorClass} href="/">
      ModalMilk
    </Link>
  )
}
