import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';

const Header = () => {


  return (
    <div className="header">
      <img className="nav-logo"></img>
      <div className="nav">
        <AnchorLink 
          href='#clients'
          className="nav-link">
            Clients
        </AnchorLink>
        <AnchorLink 
          href='#services'
          className="nav-link">
            Services
        </AnchorLink>
        <AnchorLink 
          href='#contact'
          className="nav-link">
            Contact
        </AnchorLink>
      </div>
    </div>
  );
};

export default Header;