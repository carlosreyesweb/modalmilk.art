import classNames from 'classnames'
import styles from './button.module.css'

export default function Button({ type, className, children, ...props }) {
  const btnClass = classNames(styles.button, className)

  return (
    <button type="button" className={btnClass} {...props}>
      {children}
    </button>
  )
}
