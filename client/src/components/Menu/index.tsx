import { NavLink } from 'react-router-dom';

import './style.css';

const links = [
  {
    to: '/',
    label: 'Главная',
    end: true,
  },
  {
    to: '/o-nas',
    label: 'О компании',
  },
  {
    to: '/dostavka',
    label: 'Доставка и оплата',
  },
  {
    to: '/catalog',
    label: 'Каталог',
  },
  {
    to: '/garantii',
    label: 'Гарантии',
  },
  {
    to: '/kontakty',
    label: 'Контакты',
  },
];

export default function Menu() {
  return (
    <nav className="menu">
      <div className="menu-inner">

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `menu-link${isActive ? ' active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}

      </div>
    </nav>
  );
}