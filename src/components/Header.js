import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

function Header() {
  const isAuthenticated = useAuth();

  return (
    <div>

      <Link to={'/'}>Home</Link>
      <Link to={'/ContactPage'}>ContactPage</Link>
      <Link to={'/AboutPage'}>AboutPage</Link>


      {isAuthenticated ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in</h1>
      )}

      
    </div>
  );
}

export default Header;
