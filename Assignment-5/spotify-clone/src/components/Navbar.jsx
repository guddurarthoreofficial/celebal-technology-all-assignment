import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-64 bg-black text-white p-4 space-y-4 min-h-screen">
      <h1 className="text-2xl font-bold">Spotify 2.0</h1>
      <nav className="space-y-2">
        <Link to="/" className="block hover:text-green-400">Home</Link>
        <Link to="/playlists" className="block hover:text-green-400">Playlists</Link>
        <Link to="/albums" className="block hover:text-green-400">Albums</Link>
        <Link to="/genres" className="block hover:text-green-400">Genres</Link>
      </nav>
    </div>
  );
};

export default Navbar;
