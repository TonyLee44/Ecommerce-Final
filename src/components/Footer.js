import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
          <footer id="footer">
    <div className="footer-text">
      <div className="footer-links">
        <a href="/"> Home |</a>
        <a href="/products"> Products </a>
        <a href="/contact"> | Contact Us </a>
      </div>
      <br />
      <div className="copyright">
        <p>
          &copy; Gone Golfing | ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
    <br />
    <div>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/facebooklogo.jpeg" alt="facebook" width="50px"/>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/instagramlogo.jpeg" alt="instagram" width="50px"/>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/twitterlogo.png" alt="instagram" width="50px"/>
      </a>
    </div>
  </footer>
  <Outlet></Outlet>
    </div>
  )
}
