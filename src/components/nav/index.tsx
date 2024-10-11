'use client';
import { NavLink } from './NavLink';
import { menuItems } from 'src/data/constants';

export function NavBar() {
  return (
    <nav>
      <ul>
        {
          menuItems.map((item, index) => {
            return (
              <li key={`${index}`}>
                <NavLink href={item.path}>{item.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}