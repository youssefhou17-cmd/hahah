'use client';

import { useState } from 'react';

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="topbar">
      <div className="wrap">
        <nav>
          <a className="brand" href="/#home" onClick={closeMenu}>
            <i />On the <span>Go</span>
          </a>
          <div className={`navlinks ${menuOpen ? 'open' : ''}`}>
            <a href="/#home" onClick={closeMenu}>Home page</a>
            <a href="/#services" onClick={closeMenu}>Services</a>
            <a href="/#pricing" onClick={closeMenu}>Pricing & Packages</a>
            <a href="/#devices" onClick={closeMenu}>Blog</a>
            <a href="/about" onClick={closeMenu}>About</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
          </div>
          {menuOpen && (
            <div
              className="nav-scrim open"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}
          <div className="actions">
            <button
              type="button"
              className="menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}



