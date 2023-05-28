import React, { useEffect, useState } from 'react';
import hamburgerIcon from '../assets/icons_assets/🦆 icon _hamburger menu.svg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [pathRef, setPathRef] = useState(location.pathname);
  const [hamClick, setHamClick] = useState(false);
  const [classChange, setClassChange] = useState('navbar');

  var styl;
  if (pathRef !== '/') {
    styl = { gridTemplateColumns: '1fr 1fr 1fr' };
  } else {
    styl = { gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr' };
  }

  const [NavLinks, setNavLinks] = useState(['About', 'Menu', 'Testimonials']);

  useEffect(() => {
    setPathRef(location.pathname);
    const links = location.pathname === '/' ? ['About', 'Menu', 'Testimonials'] : [];
    setNavLinks(links);
  }, [location.pathname]);

  useEffect(() => {
    if (hamClick) {
      setClassChange('navbar active');
    } else {
      setClassChange('navbar');
    }
  }, [hamClick]);

  const renderNavLinks = (links) => {
    const linkHandler = () => {
      const scrollToId = `${links.toLowerCase()}-section`;
      document.getElementById(scrollToId).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
      setHamClick(false); // Close the navbar after clicking a link
    };

    return (
      <li key={links}>
        <a href={`#${links}`} onClick={linkHandler} aria-label="on Click">
          {links}
        </a>
      </li>
    );
  };

  const handleHamClick = () => {
    setHamClick((prevState) => !prevState);
  };

  return (
    <>
      <header>
          <img aria-label="hamburger_icon" width={'30%'} src={hamburgerIcon} alt="hamburger-icon" onClick={handleHamClick} className={`hamburger ${hamClick ? 'active' : ''}`}  />
        <img src={require('../assets/logos/Asset 16@4x.png')}  width={200} alt="little-lemon logo" />
        <nav className={classChange}>
          <ul style={styl}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {NavLinks.map((li) => renderNavLinks(li))}
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
