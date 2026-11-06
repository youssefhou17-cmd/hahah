'use client';

import { useState } from 'react';

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212] border-b border-white/10 shadow-md">
      <div className="wrap">
        <nav>
          <a className="brand" href="/#home" onClick={closeMenu}>
            <img
              className="brand-logo brand-logo-desktop"
              src="/devices/CoverPNG.webp"
              alt="GoSharkTV"
            />
            <img
              className="brand-logo brand-logo-mobile"
              src="/devices/LOGO%20GOSHARKTV%20(1).webp"
              alt="GoSharkTV"
            />
            <span className="brand-text"><i />GoShark<span>TV</span></span>
          </a>

          <div
            className={`navlinks ${menuOpen ? 'open' : ''} md:hidden`}
          >
            <a href="/#home" onClick={closeMenu}>Home page</a>
            <a href="#streaming-cards" onClick={closeMenu}>Services</a>
            <a href="/#pricing" onClick={closeMenu}>Pricing & Packages</a>
            <a href="/blog" onClick={closeMenu}>Blog</a>
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
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121212] flex flex-col md:hidden">
          <div className="sticky top-0 z-10 bg-[#121212] px-4 sm:px-6 h-20 flex items-center justify-between border-b border-white/10">
            <a className="brand" href="/#home" onClick={closeMenu}>
              <img
                className="brand-logo brand-logo-desktop"
                src="/devices/LOGO%20GOSHARKTV%20DESKTOP.webp"
                alt="GoSharkTV"
              />
              <img
                className="brand-logo brand-logo-mobile"
                src="/devices/LOGO%20GOSHARKTV%20(1).webp"
                alt="GoSharkTV"
              />
              <span className="brand-text"><i />GoShark<span>TV</span></span>
            </a>
            <button
              type="button"
              className="text-white"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-white/10 px-6 py-4">
            <a href="/#home" onClick={closeMenu}>Home page</a>
            <a href="#streaming-cards" onClick={closeMenu}>Services</a>
            <a href="/#pricing" onClick={closeMenu}>Pricing & Packages</a>
            <a href="/blog" onClick={closeMenu}>Blog</a>
            <a href="/about" onClick={closeMenu}>About</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}



