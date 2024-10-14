'use client';
import { NavLink } from './NavLink';
import { menuItems } from 'src/data/constants';
import styles from './styles.module.css';

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        {
          menuItems.map((item, index) => {
            return (
              <li key={`${index}`} className={styles.navLink}>
                <NavLink href={item.path}>{item.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}