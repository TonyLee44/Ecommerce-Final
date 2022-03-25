import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <header className="stretch">
      <img className="logo" src="img/ecommercelogo.png" alt="logo"/>
      <h1>Gone Golfing</h1>
      <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>
    </header>
    <Outlet></Outlet>
    </div>
  )
}
