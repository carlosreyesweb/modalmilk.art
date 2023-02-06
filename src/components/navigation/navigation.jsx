import NavLink from '@/components/nav-link/nav-link'
import styles from './navigation.module.css'

export default function Navigation(props) {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink href="/#portafolio">Portafolio</NavLink>
        </li>
        <li>
          <NavLink href="/precios">Precios</NavLink>
        </li>
        <li>
          <NavLink href="/precios/#contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}
