import React from 'react';
import useAuth from './hooks/useAuth';

function Header() {
  const isAuthenticated = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

export default Header;
