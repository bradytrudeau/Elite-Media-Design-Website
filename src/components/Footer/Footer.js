import React, {useState} from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className='footer'>
      <a className="contact-info" href="tel:7631231234" target="_blank">(763) 123-1234</a>
      <a className="contact-info"> • 80 S 8th St, Suite #005 Minneapolis, MN 55402 • </a>
      <a className="contact-info" href="mailto:info@elitemediadesign.com" target="_blank">info@elitemediadesign.com</a>
    </footer>
  );
} 



export default Footer;