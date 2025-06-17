const Sidebar = () => (
  <div className="w-64 bg-black text-white p-4 space-y-4">
    <h1 className="text-2xl font-bold">Spotify 2.0</h1>
    <nav className="space-y-2">
      <a href="#" className="block hover:text-green-400">Home</a>
      <a href="#" className="block hover:text-green-400">Playlists</a>
      <a href="#" className="block hover:text-green-400">Albums</a>
      <a href="#" className="block hover:text-green-400">Genres</a>
    </nav>
  </div>
);

export default Sidebar;