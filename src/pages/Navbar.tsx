import React from 'react'
import { Contact } from './Contact';
import { Login } from './Login';
import { Home } from './Home';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div><Link to={'/'}>{' '}Home</Link>
   <Link to={'/login'}>{' '}Login</Link>
   <Link to={'/contact'}>{' '}Contact</Link>
   </div>
  )
}
