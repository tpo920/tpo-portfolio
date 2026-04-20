import { useState, useEffect } from 'react';
import { Tabs } from '../utils/Tabs';
import NavTabs from './NavTabs';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      if (isScrolled) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <div
            className={`image-logo ${scrolled ? 'scrolled' : 'not-scrolled'}`}
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src="/images/eggdog.jpg"
              alt="Eggdog Logo"
            />
          </div>
          <p className={`text-logo ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            Trevor
          </p>
        </a>
        <button
          onClick={toggleMenu}
          className="w-8 h-8 transition-all duration-300 hover:scale-105 ease-line md:hidden flex"
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? '/images/icons/close.svg' : '/images/icons/menu.svg'}
            alt="toggle"
          />
        </button>
        <nav className="desktop">
          <div className="flex space-x-8">
            {Tabs.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                className="text-white-50 relative py-2 hover:text-blue-400 transition-all duration-200 ease-linear hover:scale-105"
              >
                <span>{name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="px-5 py-2">
          <NavTabs onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
