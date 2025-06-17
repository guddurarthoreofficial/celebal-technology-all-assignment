import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout'
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Albums from './pages/Albums';
import Genres from './pages/Genres';

function App() {

  return (
    <div className="flex h-screen bg-gray-100"> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* default nested route */}
          <Route path="playlists" element={<Playlist />} />
          <Route path="albums" element={<Albums />} />
          <Route path="genres" element={<Genres />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;