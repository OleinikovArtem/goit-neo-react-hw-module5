import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import clsx from 'clsx'

import { ROUTES } from '../../consts'


const buildLinkClass = ({ isActive }) => clsx(styles.link, isActive && styles.active)

function Navigation() {
  return (
    <header className={clsx('container', styles.header)}>
      <nav>
        <NavLink to={ROUTES.home} className={buildLinkClass}>Home</NavLink>
        <NavLink to={ROUTES.movies} className={buildLinkClass}>Movies</NavLink>
      </nav>
    </header>
  )
}

export default Navigation
