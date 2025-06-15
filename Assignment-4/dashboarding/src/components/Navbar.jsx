// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Simulate login status (you can replace this with actual auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">RideX Rentals</Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-gray-700 font-medium flex items-center">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/rentals" className="hover:text-blue-600 transition">Rentals</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>

        {/* Conditional Rendering for Auth */}
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        ) : (
          <Link
            to="/dashboard"
            className="ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
