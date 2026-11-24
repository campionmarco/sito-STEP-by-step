'use client';

import { useEffect, useRef, useState } from 'react';
import { navLinks } from '@/data/contenuti';
import { logo } from '@/data/contatti';

type Props = {
  /** 'legale': navbar semplificata con il solo link per tornare al sito */
  variante?: 'home' | 'legale';
};

export default function Navbar({ variante = 'home' }: Props) {
  const [menuAperto, setMenuAperto] = useState(false);
  const [nascosta, setNascosta] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const menuApertoRef = useRef(false);
  const ultimoScroll = useRef(0);

  useEffect(() => {
    menuApertoRef.current = menuAperto;
  }, [menuAperto]);

  // Navbar a scomparsa: si nasconde scrollando giù, ricompare scrollando su
  useEffect(() => {
    ultimoScroll.current =
      window.pageYOffset || document.documentElement.scrollTop;

    function onScroll() {
      const corrente =
        window.pageYOffset || document.documentElement.scrollTop;

      // Non nascondere la navbar se il menu mobile è aperto
      if (menuApertoRef.current) return;

      if (corrente > 100) {
        setNascosta(corrente > ultimoScroll.current);
      } else {
        setNascosta(false);
      }

      ultimoScroll.current = corrente <= 0 ? 0 : corrente;
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Chiude il menu se si clicca fuori dalla navbar
  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!menuApertoRef.current) return;
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuAperto(false);
      }
    }
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  function toggleMenu(event: React.MouseEvent) {
    // Evita che il click si propaghi al document e richiuda subito il menu
    event.stopPropagation();
    setMenuAperto((aperto) => !aperto);
  }

  return (
    <header id="header">
      <nav
        id="navbar"
        ref={navbarRef}
        className={menuAperto ? 'nav-aperta' : undefined}
        style={{ transform: nascosta ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <div className="logo">
          {variante === 'legale' ? (
            <a href="/">
              <img src={logo.src} alt={logo.alt} />
            </a>
          ) : (
            <img src={logo.src} alt={logo.alt} />
          )}
        </div>
        <ul className="nav-links">
          {variante === 'legale' ? (
            <li>
              <a href="/" onClick={() => setMenuAperto(false)}>
                {'\u2190'} Torna al sito
              </a>
            </li>
          ) : (
            navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuAperto(false)}>
                  {link.label}
                </a>
              </li>
            ))
          )}
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          onClick={toggleMenu}
          aria-expanded={menuAperto}
          aria-label="Menu"
        >
          {menuAperto ? '\u00D7' : '\u2630'}
        </button>
      </nav>
    </header>
  );
}
