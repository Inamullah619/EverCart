'use client';

import NavLink from '../NavLink/NavLink';
import './header.css';

export default function Header() {
  return (
    <header>
      <h1>EverCart</h1>
      <nav>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/product'}>Product</NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
      </nav>
    </header>
  );
}
