import classNames from 'classnames'
import Link from 'next/link'
import styles from './nav-link.module.css'

export default function NavLink({ className, children, ...props }) {
  const linkClass = classNames(styles.link, className)

  return (
    <Link className={linkClass} {...props}>
      {children}
    </Link>
  )
}
