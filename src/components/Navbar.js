import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = ({ user, logout, scrollToSection }) => {
  return (
    <nav className="bg-gradient-to-r from-dark-gradient-start via-dark-gradient-start to-dark-gradient-end px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-white text-xl font-semibold">Movie Library</Link>
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-white hover:text-violet-400 hover:underline">Home</Link>
        <button onClick={() => scrollToSection(800)} className="text-white hover:text-violet-400 hover:underline">About</button>
        <button onClick={() => scrollToSection(1600)} className="text-white hover:text-violet-400 hover:underline">Movies</button>
        {user ? (
          <span className="text-white">{user.name}</span>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-violet-400 hover:underline">Login</Link>
            <Link to="/register" className="text-white hover:text-violet-400 hover:underline">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
