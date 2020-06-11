import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';
import { MenuAltIcon } from 'assets/icons/MenuAltIcon';
import { CloseAltIcon } from 'assets/icons/CloseAltIcon';

export const Navbar = props => {
  const { links, variant } = props;


  // Collecting the navbar offset is important for smooth transitions,
  // as the correct value affects overall transition speed
  const navbar = useRef(Navbar);
  const [ navbarOffset, setNavbarOffset] = useState(0);

  useEffect(() => {
    const offset = navbar.current.offsetWidth;
    if(offset > 0)
      setNavbarOffset(offset + 50); // 50 to account for padding
  }, [navbar.current.offsetWidth]);


  // Menu toggling
  const [ menu, setMenu ] = useState({ open: false });
  const toggleMenu = () => setMenu({ open: !menu.open });
  const className = menu.open ? 'navbar-open' : 'navbar';


  // Check if there's an 'underline' variant in props
  const underline = (
    variant === 'navbar-underline' ||
    variant === 'navbar-right-underline'
  );

  // Determining which menu icon to serve & menu offset
  const Icon = props => menu.open ? <CloseAltIcon { ...props } /> : <MenuAltIcon { ...props } />;
  const menuOffset = !menu.open && navbarOffset ? `-${navbarOffset}px` : undefined;

  return (
    <header
      { ...props }
      className={ setClassName(props, className) }
      ref={ navbar }
      style={ { left: menuOffset } }
    >
      <nav>
        <Icon onClick={ toggleMenu } />
        <ul>
          {
            links.map(link => {
              const { a, li, text } = link;
              const { key } = li;

              return (
                <li { ...li } key={ key }>
                  <a { ...a }>{ text }</a>
                  { underline ? <span /> : undefined }
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );

};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string
};