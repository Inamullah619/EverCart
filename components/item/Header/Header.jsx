'use client';

import { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import './header.css';

export default function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header>
      <h1>EverCart</h1>
      <div
        onClick={() => setNavActive(!navActive)}
        className={`menuButton ${navActive ? 'active' : ''}`}
      >
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
      <nav className={navActive ? 'open' : ''}>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/product'}>Product</NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
      </nav>
    </header>
  );
}
