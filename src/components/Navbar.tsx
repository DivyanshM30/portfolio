'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';
const links = [['projects', 'Work'], ['about', 'About'], ['skills', 'Toolkit'], ['experience', 'Journey']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme();
  useEffect(() => {
    if (open) menu.current?.querySelector('a')?.focus();
  }, [open]);
  const navigate = (id: string) => {
    if (open) {
      const section = document.getElementById(id);
      section?.setAttribute('tabindex', '-1');
      section?.focus({ preventScroll: true });
    }
    setOpen(false);
  };
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const resize = () => { if (window.innerWidth > 700) setOpen(false); };
    window.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
  }, [open]);
  return <header className="navbar"><nav className="nav-container" aria-label="Main navigation">
    <a className="logo" href="#home" onClick={() => setOpen(false)}>dm<span>®</span></a>
    <div ref={menu} className={`nav-links ${open ? 'mobile-open' : ''}`} id="main-menu">{links.map(([id, name]) => <a key={id} href={`#${id}`} onClick={() => navigate(id)}>{name}</a>)}<a className="nav-contact" href="#contact" onClick={() => navigate('contact')}>Let’s talk <span>↗</span></a></div>
    <div className="nav-controls"><button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme"><span aria-hidden="true">◐</span></button><button ref={menuButton} className="mobile-menu" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button></div>
  </nav></header>;
}
